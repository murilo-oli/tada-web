import { useState } from "react";
import Translator from "./components/Translator";
import Repo from "./components/Repo";
import ImpactImage from './assets/impact.svg'
import check from './assets/check.svg';

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
    {
      name: "vue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxt",
      desc: "la lalasdfjsdoh asdnsdçohfjçasodjf ADF ",
      url: "abc.abcefçolhid@ajdhfgasdjfg.git",
      favs: 27,
      stars: 8
    },
    {
      name: "vue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxt",
      desc: "la lalasdfjsdoh asdnsdçohfjçasodjf ADF ",
      url: "abc.abcefçolhid@ajdhfgasdjfg.git",
      favs: 27,
      stars: 8
    },
    {
      name: "vue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxt",
      desc: "la lalasdfjsdoh asdnsdçohfjçasodjf ADF ",
      url: "abc.abcefçolhid@ajdhfgasdjfg.git",
      favs: 27,
      stars: 8
    },
    {
      name: "vue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxt",
      desc: "la lalasdfjsdoh asdnsdçohfjçasodjf ADF ",
      url: "abc.abcefçolhid@ajdhfgasdjfg.git",
      favs: 27,
      stars: 8
    },
    {
      name: "vue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxt",
      desc: "la lalasdfjsdoh asdnsdçohfjçasodjf ADF ",
      url: "abc.abcefçolhid@ajdhfgasdjfg.git",
      favs: 27,
      stars: 8
    },
    {
      name: "vue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxt",
      desc: "la lalasdfjsdoh asdnsdçohfjçasodjf ADF ",
      url: "abc.abcefçolhid@ajdhfgasdjfg.git",
      favs: 27,
      stars: 8
    },
    {
      name: "vue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxtvue-stripe-nuxt",
      desc: "la lalasdfjsdoh asdnsdçohfjçasodjf ADF ",
      url: "abc.abcefçolhid@ajdhfgasdjfg.git",
      favs: 27,
      stars: 8
    },
  ]

  const [toast, setToast] = useState(false);

  const handleCopy = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 1500);
  }
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-darkTop to-darkBottom font-lexend text-mainWhite px-52 pt-32 pb-10">
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
            <img src={ImpactImage} alt="Notebook image" className="" />
          </section>
        </section>

        <section className="mt-28 text-darkTop rounded-2xl">
          <div className="flex items-baseline justify-center gap-x-2.5">
            <h2 className="text-mainWhite w-max whitespace-nowrap font-bold text-2xl"><Translator path="home.featuredTitle" /></h2>
            <span className="h-0.5 w-full bg-mainWhite p-0 m-o"></span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 auto-cols-auto">
            {mockRepo.map((item, idx) => {
              return (
                <Repo key={idx} name={item.name} desc={item.desc} url={'git clone ' + item.url} favs={item.favs} stars={item.stars} handleCopy={handleCopy} />
              )
            })}
          </div>
        </section>
        {toast == true &&
          (<span className='bg-mainWhite text-darkBg fixed bottom-10 left-[50%] px-2.5 py-1 rounded-2xl flex items-center gap-x-1'>
            <img src={check} alt="Check Icon" className="w-5"/>
            <span><Translator path="home.copy"/></span>
          </span>)}
      </main>

    </>
  );
}