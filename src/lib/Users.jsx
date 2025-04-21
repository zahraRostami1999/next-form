import { revalidatePath } from "next/cache";

export async function SetUsersInfo({name, age}) {    

    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({
            id: Math.floor(Math.random() * 1000),
            name,
            age
        })
    }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
}

export async function GetUsersInfo() {
    const res = await fetch("http://localhost:8000/users", {
        method: "GET",
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}