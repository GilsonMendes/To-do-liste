
import Image from "next/image"
export default function Home() {
  return (
    <main className="bg-slate-950 h-screen">
      <div className="flex justify-center" >
        <Image className="mt-96"
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
        Sistema feito para você organizar <br/>seus estudos e tarefas
      </h1>
    </main>
  )
}

