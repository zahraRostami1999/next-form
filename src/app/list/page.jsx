import { GetUsersInfo } from "@/lib/Users";
async function UsersList() {
    const users = await GetUsersInfo();
    return (
        <div>
            <header>
                <h1>Users List</h1>
            </header>
            <main>
                <div className="flex justify-center items-center text-center">
                    <div className="w-1/2 bg-white shadow-md rounded p-4 text-neutral-800">
                        <header>
                            <h1 className="text-3xl font-bold">
                                Users List
                            </h1>
                        </header>
                        <main>
                            <div className="p-4">
                                <table className="w-full border-collapse border border-gray-200">
                                    <thead>
                                        <tr>
                                            <th className="border border-gray-200 px-4 py-2">ID</th>
                                            <th className="border border-gray-200 px-4 py-2">Name</th>
                                            <th className="border border-gray-200 px-4 py-2">Age</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td className="border border-gray-200 px-4 py-2">{user.id}</td>
                                                <td className="border border-gray-200 px-4 py-2">{user.name}</td>
                                                <td className="border border-gray-200 px-4 py-2">{user.age}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </main>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default UsersList;
