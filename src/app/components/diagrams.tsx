"use client";
import {
  ArrowRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export function Diagrams() {
  // State for storing input values
  const [fo1Value, setFo1Value] = useState("");
  const [fa1Value, setFa1Value] = useState("");
  const [mg1Value, setMg1Value] = useState("");
  const [fe1Value, setFe1Value] = useState("");

  const [fo2Value, setFo2Value] = useState("");
    const [fa2Value, setFa2Value] = useState("");
    const [mg2Value, setMg2Value] = useState("");
    const [fe2Value, setFe2Value] = useState("");

    const [fo3Value, setFo3Value] = useState("");
    const [fa3Value, setFa3Value] = useState("");
    const [mg3Value, setMg3Value] = useState("");
    const [fe3Value, setFe3Value] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    // Convert inputs to floating point numbers
    const fo1 = parseFloat(fo1Value);
    const fa1 = parseFloat(fa1Value);
    const mg1 = parseFloat(mg1Value);
    const fe1 = parseFloat(fe1Value);

    const fo2 = parseFloat(fo2Value);
    const fa2 = parseFloat(fa2Value);
    const mg2 = parseFloat(mg2Value);
    const fe2 = parseFloat(fe2Value);

    const fo3 = parseFloat(fo3Value);
    const fa3 = parseFloat(fa3Value);
    const mg3 = parseFloat(mg3Value);
    const fe3 = parseFloat(fe3Value);

    // Validation logic
    if (fo1 === 60 && fa1 === 40 && mg1 === 0.6 && fe1 === 0.4) {
      console.log("Validation passed!");
      // Handle the correct case
    } else {
      console.error("Validation failed!");
      // Handle the error case
    }
  };
  return (
    <>
      <h1 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        2) Preencha os campos plotados no diagrama da série fosterita-faialita:
      </h1>
      <div className="flex flex-row items-center">
        <div className="flex-1">
          <figure className="mt-16">
            <img
              className=" rounded-xl bg-gray-50 object-cover"
              src="images/exercicio08.png"
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
        </div>
        <div className="flex-1">
          <ul className="list-disc">
            <li className="flex items-center">
              <h2 className="font-bold text-3xl">
                Fo
                <sub className="text-red-600">
                  {" "}
                  <input
                    className="text-red-600 w-8 border-b-2 border-red-500"
                    value={fo1Value}
                    onChange={(e) => setFo1Value(e.target.value)}
                  />
                </sub>
                Fa
                <sub className="text-red-600">
                  {" "}
                  <input
                    className="text-red-600 w-8 border-b-2 border-red-500"
                    value={fa1Value}
                    onChange={(e) => setFa1Value(e.target.value)}
                  />
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" 
                  value={mg1Value}
                  onChange={(e) => setMg1Value(e.target.value)}/>
                </span>
                Fe
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" 
                  value={fe1Value}
                  onChange={(e) => setFe1Value(e.target.value)}/>
                </span>
                )2SiO4
              </h2>
            </li>
            <li className="mt-5 mb-5 flex items-center">
              <h2 className="font-bold text-3xl">
                Fo
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-8 border-b-2 border-red-500" 
                  value={fo2Value}
                  onChange={(e) => setFo2Value(e.target.value)}/>
                </sub>
                Fa
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-8 border-b-2 border-red-500" 
                  value={fa2Value}
                  onChange={(e) => setFa2Value(e.target.value)}/>
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" 
                  value={mg2Value}
                  onChange={(e) => setMg2Value(e.target.value)}/>
                </span>
                Fe
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" 
                  value={fe2Value}
                  onChange={(e) => setFe2Value(e.target.value)}/>
                </span>
                )2SiO4
              </h2>
            </li>
            <li className="flex items-center">
              <h2 className="font-bold text-3xl">
                Fo
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-8 border-b-2 border-red-500" 
                  value={fo3Value}
                  onChange={(e) => setFo3Value(e.target.value)}/>
                </sub>
                Fa
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-8 border-b-2 border-red-500" 
                  value={fa3Value}
                  onChange={(e) => setFa3Value(e.target.value)}/>
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" 
                  value={mg3Value}
                  onChange={(e) => setMg3Value(e.target.value)}/>
                </span>
                Fe
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" 
                  value={fe3Value}
                  onChange={(e) => setFe3Value(e.target.value)}/>
                </span>
                )2SiO4
              </h2>
            </li>
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="bg-red-900 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-800"
            >
              Submit
            </button>
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex-1">
          <figure className="mt-16">
            <img
              className=" rounded-xl bg-gray-50 object-cover"
              src="images/exercicio09.png"
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
        </div>
        <div className="flex-1">
          <ul className="list-disc">
            <li className="flex items-center">
              <h2 className="font-bold text-3xl">
                Fo
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-8 border-b-2 border-red-500" />
                </sub>
                Fa
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-8 border-b-2 border-red-500" />
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" />
                Fe
                <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" />
                2SiO4
              </h2>
            </li>
            <li className="mt-5 mb-5 flex items-center">
              <h2 className="font-bold text-3xl">
                Fo
                <sub className="text-red-600">
                  <input className="text-red-600 w-10 border-b-2 border-red-500" />
                </sub>
                Fa
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-8 border-b-2 border-red-500" />
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" />
                </span>
                Fe
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" />
                </span>
                )2SiO4
              </h2>
            </li>
            <li className="flex items-center">
              <h2 className="font-bold text-3xl">
                Fo
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-8 border-b-2 border-red-500" />
                </sub>
                Fa
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-8 border-b-2 border-red-500" />
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" />
                </span>
                Fe
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" />
                </span>
                )2SiO4
              </h2>
            </li>
            <button
              onClick={() => {
                console.log("placeholder");
              }}
              className="bg-red-900 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-800"
            >
              Submit
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
