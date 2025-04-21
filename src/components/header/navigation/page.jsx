import Link from "next/link"
function Navigation() {
    return (
        <div>
            <ul className="flex gap-10">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/form">Form</Link>
                </li>
                <li>
                    <Link href="/list">Users List</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;
