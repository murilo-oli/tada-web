import Translator from "./components/Translator";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-darkTop to-darkBottom font-lexend text-mainWhite px-52 py-40">
      <section className="flex items-center justify-between h-full">
        <section className="max-w-[50%]">
          <section className="flex flex-col gap-y-3 mb-10">
            <h1 className="font-black text-5xl mb-2 flex items-center gap-2">Tada 🎉</h1>
            <p className="text-md font-medium mb-3">
              <Translator path="home.subText" />
            </p>
            <p className="text-lg">
              <Translator path="home.descText" />
            </p>
            <p className="text-lg font-medium mt-2">
              <Translator path="home.callText" />
            </p>
          </section>
          <section className="flex gap-x-4">
            <button className="bg-mainWhite text-darkBottom border-2 border-mainWhite rounded-lg px-6 py-3 font-medium">
              <Translator path="home.mainBtn" />
            </button>
            <button className="border-2 border-mainWhite rounded-lg px-6 py-3 font-medium">
              <Translator path="home.secondaryBtn" />
            </button>
          </section>
        </section>
        <section>
          <div className="w-full h-full">
            <p>abc</p>
          </div>
        </section>
      </section>

      <section>
        <p>list</p>
      </section>
    </main>
  );
}