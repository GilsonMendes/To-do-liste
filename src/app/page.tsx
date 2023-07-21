
import Image from "next/image"
export default function Home() {
  return (
    <main className="bg-slate-950 h-screen">
      <div className="flex justify-center" >
        <Image className="mt-32"
          src="/assets/hero.png" alt="Logo site"
          height={469}
          width={469}
          priority
        />
      </div>
      <h1
        className="flex justify-center 
          text-center
        text-slate-50 
        mt-10 
        font-bold 
        text-2xl">
        Sistema feito para você organizar <br />seus estudos e tarefas
      </h1>
      <div className="sm:flex justify-center">
        <div className="flex justify-center">
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-300
          bg-slate-50 w-96 sm:bg-slate-50 sm:w-64 p-4 mt-8 rounded-lg font-bold text-lg"
            type="submit">
            + 7 posts
          </button>

        </div>
        <div className="flex justify-center">
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-300
          bg-slate-50 mt-8 w-96 
          sm:bg-slate-50 sm:w-64 sm:ml-10 p-4 rounded-lg font-bold text-lg"
            type="submit">
            + 7 Comentários
          </button>

        </div>

      </div>
    </main>
  )
}

