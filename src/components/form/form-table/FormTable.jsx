"use client"

import {GetUsersData} from "@/actions/UsersAction";
import { useActionState } from "react";
import SubmitBtn from "../displayPendingMsg/SubmitBtn";
function FormTable() {
    const [formState, formAction] = useActionState(GetUsersData, {});
    
    return (
        <div className="flex justify-center items-center">
            <div className="w-1/2 bg-white shadow-md rounded p-4 text-neutral-800">
                <header>
                    <h1 className="text-3xl font-bold">
                        Form Table
                    </h1>
                </header>
                <main>
                    <div className="p-4">
                        <form action={formAction} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="name">What's your name?</label>
                                <input type="text" name="name" className="px-1 py-1 border rounded" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="age">How old are you?</label>
                                <input type="text" name="age" className="px-1 py-1 border rounded" />
                            </div>
                            <div className='h-1'>
                                {formState && (<ul>
                                    {Object.keys(formState).map((error) => {
                                        return <p key={error} className='text-red-500 text-xs'>{formState[error]}</p>
                                    })}
                                </ul>)}
                            </div>
                            <div className="my-2">
                                <SubmitBtn />
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default FormTable
