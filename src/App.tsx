import Translator from "./components/Translator";
import Repo from "./components/Repo";
import ImpactImage from './assets/impact.svg'

export default function App() {
  const mockRepo = [
    {
      name: "react-vite-threejs",
      desc: "la lalasdfjsdoh asdnsdçohfjçasodjf ADF ",
      url: "abc.abcefçolhid@ajdhfgasdjfg.git",
      favs: 5,
      stars: 20
    },
    {
      name: "vue-stripe-nuxt",
      desc: "la lalasdfjsdoh asdnsdçohfjçasodjf ADF ",
      url: "abc.abcefçolhid@ajdhfgasdjfg.git",
      favs: 27,
      stars: 8
    },
  ]
  return (
    <main className="min-h-screen bg-gradient-to-b from-darkTop to-darkBottom font-lexend text-mainWhite px-52 py-32">
      <section className="flex justify-between h-full gap-y-3">
        <section className=" flex flex-col gap-y-14">
            <div>
              <h1 className="font-black text-5xl mb-2 flex items-center gap-2">Tada 🎉</h1>
              <p className="text-md font-medium">
                <Translator path="home.subText" />
              </p>
            </div>
            <p className="text-lg max-w-[60%]">
              <Translator path="home.descText" />
            </p>
            
            <p className="text-lg font-medium">
              <Translator path="home.callText" />
            </p>
          
          <section className="flex gap-x-4">
            <button className="bg-mainWhite text-darkBottom border-2 border-mainWhite rounded-lg px-6 py-3 font-medium">
              <Translator path="home.mainBtn" />
            </button>
            <button className="border-2 border-mainWhite rounded-lg px-6 py-3 font-medium">
              <Translator path="home.secondaryBtn" />
            </button>
          </section>
        </section>
        <section className="w-full h-full drop-shadow-glow">
            <img src={ImpactImage} alt="Notebook image" className=""/>
        </section>
      </section>

      <section className="mt-28 bg-mainWhite p-8 text-darkTop rounded-2xl">
        {mockRepo.map((item, idx) => {
          return (
            <Repo key={idx} name={item.name} desc={item.desc} url={item.url} favs={item.favs} stars={item.stars} />
          )
        })}
      </section>
    </main>
  );
}