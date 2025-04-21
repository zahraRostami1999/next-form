"use server";
import { SetUsersInfo } from "@/lib/Users";
import { redirect } from 'next/navigation';


export async function GetUsersData(prevState, formData) {
  const name = formData.get('name');
  const age = formData.get('age');
  const numAge = Number(age);

  let errors = {}

  if (name.length < 3) {
    errors.name = "Name must be at least 3 characters long."
  }

  if (isNaN(numAge) || numAge < 8 || numAge > 85) {
    errors.age = "Age must be a valid number between 8 and 85.";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const user = await SetUsersInfo({ name, age: numAge });
  redirect("/list");
}