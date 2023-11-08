"use client";
import { useState } from "react";
import Header from "../components/header";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [gp, setGp] = useState("");
  const [tectossilicatos, setTectossilicatos] = useState("");
  const [plagioclasios, setPlagioclasios] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const isGpCorrect = gp === "4";
    const isTectossilicatosCorrect =
      tectossilicatos.toLowerCase() === "tectossilicatos";
    const isPlagioclasiosCorrect =
      plagioclasios.toLowerCase() === "plagioclasios";

    setIsCorrect(
      isGpCorrect && isTectossilicatosCorrect && isPlagioclasiosCorrect
    );
  };

  return (
    <>
      <Header />
      <main>
        <div className="bg-white px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Introducing
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Preencha os campos abaixo com a resposta correta
            </h1>
            <div className="flex flex-col items-center">
              <figure className="mt-16">
                <img
                  className="aspect-video rounded-xl bg-gray-50 object-cover"
                  src="images/exercicio01.png"
                  alt=""
                />
                <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                  <InformationCircleIcon
                    className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                    aria-hidden="true"
                  />
                  Descrição da imagem.
                </figcaption>
              </figure>
              <h2 className="mt-10">Subclasse</h2>
              <input
                name="gp01"
                id="gp01"
                value={gp}
                onChange={(e) => setGp(e.target.value)}
                className="mt-2 block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="GP"
              />
              <input
                name="Tectossilicatos"
                id="Tectossilicatos"
                value={tectossilicatos}
                onChange={(e) => setTectossilicatos(e.target.value)}
                className="mt-5 mb-5 block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Tectossilicatos"
              />
              <div className="flex flex-col items-center">
                <input
                  name="subclasse01"
                  id="subclasse01"
                  value={plagioclasios}
                  onChange={(e) => setPlagioclasios(e.target.value)}
                  className="w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Plagioclasios"
                />
                <span className="block text-center mt-2">
                  (Na,Ca)AlSi<sub>2</sub>(Si,Al)O<sub>8</sub>
                </span>
              </div>

              <button
                onClick={handleSubmit}
                className="bg-red-900 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-800"
              >
                Submit
              </button>
            </div>

            {isCorrect !== null && (
              <div className={`text-${isCorrect ? "green" : "red"}-500`}>
                {isCorrect ? "Correct" : "Incorrect"}
              </div>
            )}
            <div className="mt-10 max-w-2xl">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Data types.
                    </strong>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Loops.
                    </strong>{" "}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Events.
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                From beginner to expert in 3 hours
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
              <figure className="mt-10 border-l border-indigo-600 pl-9">
                <blockquote className="font-semibold text-gray-900">
                  <p>
                    “Vel ultricies morbi odio facilisi ultrices accumsan donec
                    lacus purus. Lectus nibh ullamcorper ac dictum justo in
                    euismod. Risus aenean ut elit massa. In amet aliquet eget
                    cras. Sem volutpat enim tristique.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4">
                  <img
                    className="h-6 w-6 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="text-sm leading-6">
                    <strong className="font-semibold text-gray-900">
                      Maria Hill
                    </strong>{" "}
                    – Marketing Manager
                  </div>
                </figcaption>
              </figure>
              <p className="mt-10">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
            </div>
            <figure className="mt-16">
              <img
                className="aspect-video rounded-xl bg-gray-50 object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                alt=""
              />
              <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                <InformationCircleIcon
                  className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                  aria-hidden="true"
                />
                Faucibus commodo massa rhoncus, volutpat.
              </figcaption>
            </figure>
            <div className="mt-16 max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Everything you need to get up and running
              </h2>
              <p className="mt-6">
                Purus morbi dignissim senectus mattis adipiscing. Amet, massa
                quam varius orci dapibus volutpat cras. In amet eu ridiculus leo
                sodales cursus tristique. Tincidunt sed tempus ut viverra
                ridiculus non molestie. Gravida quis fringilla amet eget dui
                tempor dignissim. Facilisis auctor venenatis varius nunc, congue
                erat ac. Cras fermentum convallis quam.
              </p>
              <p className="mt-8">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
