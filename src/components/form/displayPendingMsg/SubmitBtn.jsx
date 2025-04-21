"use client";
import { useFormStatus } from 'react-dom';

function SubmitBtn() {
    const { pending } = useFormStatus();
    return (
        <div>
            <button className="bg-pink-600 rounded p-1 w-full text-white cursor-pointer hover:bg-pink-500 transition-colors duration-300">
                {pending ? "Adding User..." : "Add"}
            </button>
        </div>
    )
}

export default SubmitBtn
