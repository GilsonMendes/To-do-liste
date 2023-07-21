import Link from "next/link"

export default function Header() {

    return (
        <header className="bg-slate-950">
            <section className="flex justify-between">
                <nav>
                    <Link href="/">
                        <h1 className="text-2xl font-bold p-3 ml-2 text-white ">Tarefas <span className="text-4xl font-extrabold text-red-500">+</span></h1>
                    </Link>

                </nav>

                <button className="text-white mr-12 border border-solid 
                rounded-3xl w-28 mt-3 font-bold hover:bg-white hover:text-black">Acessar</button>

            </section>
        </header>
    )

}