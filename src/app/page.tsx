
import Image from "next/image"
export default function Home() {
  return (
    <main>
      <div className="bg-red-200 w-1/2 mt-6 ml-6" >
        <Image
          className="clear-both float-left mr-6"
          src="/assets/hero.png" alt="Logo site"
          height={469}
          width={469}
          priority
        />
      </div>
      <h1>Sistema feito para você organizar seus estudos e tarefas</h1>
    </main>
  )
}

