import imgCard from './assets/illustration-article.svg'

export default function App() {
  return (
    <main className="flex items-center justify-center h-screen w-full bg-[#F4D04E]">
      <section className="relative mx-4">
        <div className="relative z-20 flex flex-col max-w-[327px]  md:max-w-[384px] bg-zinc-50 p-6 rounded-[24px] gap-5 border-2 border-black">
          <img src={imgCard} alt="image card" className="rounded-lg" />
          <div className="flex flex-col gap-4">
            <button className="bg-[#F4D04E] p-2 rounded max-w-20">
              <p className="text-black font-bold text-md">Learning</p>
            </button>
            <p className="text-sm font-semibold text-gray-700">
              Published 21 Dec 2023
            </p>
            <h1 className="text-2xl text-black font-bold hover:text-yellow-400 cursor-pointer">
              HTML & CSS foundations
            </h1>
            <p className="text-gray-500">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img
              className="h-8 w-8 rounded-full"
              src="https://github.com/frantecbh.png"
              alt=" image profile"
            />
            <h1 className="font-bold text-sm">Francisco Menezes</h1>
          </div>
        </div>
        <div className="h-full w-full bg-black absolute top-2 left-2 z-10 rounded-xl" />
      </section>
    </main>
  )
}
