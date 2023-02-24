import Link from "next/link"

function Header() {
  return (
    <header className="bg-slate-700 p-4 ">
        <nav className="container flex justify-between items-center">
            <h1 className="text-4xl font-bold">مویی فا</h1>
            <ul className="flex gap-4">
                <li>
                    <Link href={'/'}
                    className="bg-blue-700 hover:bg-blue-800 
                    transition-all duration-200 w-32 h-14 rounded-[.25rem] flex items-center justify-center">خانه</Link>
                </li>
                <li>
                    <Link href={'/movies'}
                    className="bg-blue-700 hover:bg-blue-800 
                    transition-all duration-200 w-32 h-14 rounded-[.25rem] flex items-center justify-center">فیلم ها</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header