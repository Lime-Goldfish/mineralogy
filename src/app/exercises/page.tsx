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

  //exercicio 02

  const [cadeia, setCadeia] = useState("");
  const [gp2, setGP2] = useState("");
  const [gp3, setGP3] = useState("");
  const [gp4, setGP4] = useState("");
  const [gp5, setGP5] = useState("");
  const [gp6, setGP6] = useState("");
  const [inossilicatos, setInossilicatos] = useState("");
  const [hornblenda, setHornblenda] = useState("");
  const [isCorrectEx2, setIsCorrectEx2] = useState<boolean | null>(null);
  const [nesossilicatos, setNesossilicatos] = useState("");
  const [olivina, setOlivina] = useState("");
  const [isCorrectEx4, setIsCorrectEx4] = useState<boolean | null>(null);

  //exercicio 03

  const [cadeia2, setCadeia2] = useState("");
  const [diopsidio, setDiopsidio] = useState("");
  const [isCorrectEx3, setIsCorrectEx3] = useState<boolean | null>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    //exercicio 01

    const isGpCorrect = gp === "4";
    const isTectossilicatosCorrect =
      tectossilicatos.toLowerCase() === "tectossilicatos";
    const isPlagioclasiosCorrect =
      plagioclasios.toLowerCase() === "plagioclasios";

    setIsCorrect(
      isGpCorrect && isTectossilicatosCorrect && isPlagioclasiosCorrect
    );

    //exercicio 02

    const isCadeiaCorrect = cadeia.toLowerCase() === "dupla";
    const isGp2Correct = gp2 === "2";
    const isGp3Correct = gp3 === "3";
    const isGp4Correct = gp4 === "2";
    const isGp5Correct = gp5 === "3";
    const isGp6Correct = gp6 === "0";
    const isInossilicatosCorrect =
      inossilicatos.toLowerCase() === "inossilicatos";
    const isHornblendaCorrect = hornblenda.toLowerCase() === "hornblenda";
    const isNesoSilicatosCorrect =
      nesossilicatos.toLowerCase() === "nesossilicatos";

    // exercicio03

    const isCadeia2Correct = cadeia2.toLowerCase() === "simples";
    const isDiopsidioCorrect =
      diopsidio.toLowerCase() === "diopsídio-hedenbergita";

    setIsCorrectEx2(
      isGp2Correct &&
        isGp3Correct &&
        isGp4Correct &&
        isGp5Correct &&
        isCadeiaCorrect &&
        isInossilicatosCorrect &&
        isHornblendaCorrect
    );

    const isOlivinaCorrect = olivina.toLowerCase() === "olivina";

    //exercicio 03
    setIsCorrectEx3(isCadeia2Correct && isDiopsidioCorrect);

    //exercicio 04
    setIsCorrectEx4(isNesoSilicatosCorrect && isGp6Correct && isOlivinaCorrect);
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

            <div className="flex flex-col items-center">
              <figure className="mt-16">
                <img
                  className="aspect-video rounded-xl bg-gray-50 object-cover"
                  src="images/exercicio02.png"
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
                name="gp2"
                id="gp2"
                value={gp2}
                onChange={(e) => setGP2(e.target.value)}
                className="mt-2 block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="GP2"
              />
              <input
                name="gp3"
                id="gp3"
                value={gp3}
                onChange={(e) => setGP3(e.target.value)}
                className="mt-2 block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="GP3"
              />
              <input
                name="gp4"
                id="gp4"
                value={gp4}
                onChange={(e) => setGP4(e.target.value)}
                className="mt-2 block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="GP4"
              />
              <input
                name="gp5"
                id="gp5"
                value={gp5}
                onChange={(e) => setGP5(e.target.value)}
                className="mt-2 block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="GP5"
              />
              <input
                name="cadeia1"
                id="cadeia1"
                value={cadeia}
                onChange={(e) => setCadeia(e.target.value)}
                className="mt-2 block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="cadeia"
              />
              <input
                name="Inossilicatos"
                id="Inossilicatos"
                value={inossilicatos}
                onChange={(e) => setInossilicatos(e.target.value)}
                className="mt-5 mb-5 block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Inossilicatos"
              />
              <div className="flex flex-col items-center">
                <input
                  name="Hornblenda"
                  id="Hornblenda"
                  value={hornblenda}
                  onChange={(e) => setHornblenda(e.target.value)}
                  className="w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Hornblenda"
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

            {isCorrectEx2 !== null && (
              <div className={`text-${isCorrectEx2 ? "green" : "red"}-500`}>
                {isCorrectEx2 ? "Correct" : "Incorrect"}
              </div>
            )}

            <div className="flex flex-col items-center">
              <figure className="mt-16">
                <img
                  className="aspect-video rounded-xl bg-gray-50 object-cover"
                  src="images/exercicio03.png"
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
                name="cadeia2"
                id="cadeia2"
                value={cadeia2}
                onChange={(e) => setCadeia2(e.target.value)}
                className="mt-2 block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="cadeia2"
              />
              <input
                name="Inossilicatos"
                id="Inossilicatos"
                value={inossilicatos}
                onChange={(e) => setInossilicatos(e.target.value)}
                className="w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Inossilicatos"
              />
              <input
                name="Diopsídio-Hedenbergita"
                id="Diopsídio-Hedenbergita"
                value={diopsidio}
                onChange={(e) => setDiopsidio(e.target.value)}
                className="w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Diopsídio-Hedenbergita"
              />
              <button
                onClick={handleSubmit}
                className="bg-red-900 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-800"
              >
                Submit
              </button>
            </div>

            {setIsCorrectEx3 !== null && (
              <div className={`text-${isCorrectEx3 ? "green" : "red"}-500`}>
                {isCorrectEx3 ? "Correct" : "Incorrect"}
              </div>
            )}

            <div className="flex flex-col items-center">
              <figure className="mt-16">
                <img
                  className="aspect-video rounded-xl bg-gray-50 object-cover"
                  src="images/exercicio04.png"
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
                name="gp6"
                id="gp6"
                value={gp6}
                onChange={(e) => setGP6(e.target.value)}
                className="mt-2 block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="gp6"
              />
              <input
                name="Nesossilicatos"
                id="Nesossilicatos"
                value={nesossilicatos}
                onChange={(e) => setNesossilicatos(e.target.value)}
                className="w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Nesossilicatos"
              />
              <input
                name="Olivina"
                id="Olivina"
                value={olivina}
                onChange={(e) => setOlivina(e.target.value)}
                className="w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Olivina"
              />
              <button
                onClick={handleSubmit}
                className="bg-red-900 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-800"
              >
                Submit
              </button>
            </div>

            {isCorrectEx4 !== null && (
              <div className={`text-${isCorrectEx4 ? "green" : "red"}-500`}>
                {isCorrectEx4 ? "Correct" : "Incorrect"}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
