import Link from "next/link"

export default function Header() {

    return (
        <header className="bg-slate-950 h-0">
            <section className="flex justify-between">
                <nav className="flex">
                    <Link href="/">
                        <h1 className="text-2xl font-bold p-3 ml-2 text-white ">Tarefas <span className="text-4xl font-extrabold text-red-500">+</span></h1>
                    </Link>
                    <button className= "text-black font-bold bg-white rounded-lg mt-3 p-3 transition  delay-200 ease-linear duration-200 hover:bg-slate-300 ">Meu Painel</button>
                </nav>

                <button className="text-white mr-12 border border-solid transition  delay-200 ease-linear duration-200
                rounded-3xl w-28 mt-3 font-bold hover:bg-white hover:text-black">Acessar</button>

            </section>
        </header>
    )

}