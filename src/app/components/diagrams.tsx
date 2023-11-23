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

  const [fo4Value, setFo4Value] = useState("");
  const [fa4Value, setFa4Value] = useState("");
  const [mg4Value, setMg4Value] = useState("");
  const [fe4Value, setFe4Value] = useState("");

  const [fo5Value, setFo5Value] = useState("");
  const [fa5Value, setFa5Value] = useState("");
  const [mg5Value, setMg5Value] = useState("");
  const [fe5Value, setFe5Value] = useState("");

  const [fo6Value, setFo6Value] = useState("");
  const [fa6Value, setFa6Value] = useState("");
  const [mg6Value, setMg6Value] = useState("");
  const [fe6Value, setFe6Value] = useState("");

  const [success1Message, setSuccess1Message] = useState("");
  const [success2Message, setSuccess2Message] = useState("");
  const [success3Message, setSuccess3Message] = useState("");
  const [success4Message, setSuccess4Message] = useState("");
  const [success5Message, setSuccess5Message] = useState("");
  const [success6Message, setSuccess6Message] = useState("");

  const [error1Message, setError1Message] = useState("");
  const [error2Message, setError2Message] = useState("");
  const [error3Message, setError3Message] = useState("");
  const [error4Message, setError4Message] = useState("");
  const [error5Message, setError5Message] = useState("");
  const [error6Message, setError6Message] = useState("");

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

    const fo4 = parseFloat(fo4Value);
    const fa4 = parseFloat(fa4Value);
    const mg4 = parseFloat(mg4Value);
    const fe4 = parseFloat(fe4Value);

    const fo5 = parseFloat(fo5Value);
    const fa5 = parseFloat(fa5Value);
    const mg5 = parseFloat(mg5Value);
    const fe5 = parseFloat(fe5Value);

    const fo6 = parseFloat(fo6Value);
    const fa6 = parseFloat(fa6Value);
    const mg6 = parseFloat(mg6Value);
    const fe6 = parseFloat(fe6Value);

    // Validation logic
    if (fo1 === 60 && fa1 === 40 && mg1 === 0.6 && fe1 === 0.4) {
      setSuccess1Message("Correto!");
    } else {
      setError1Message("Incorreto!");
      // Handle the error case
    }

    if (fo2 === 35 && fa2 === 65 && mg2 === 0.35 && fe2 === 0.65) {
      setSuccess2Message("Correto!");
    } else {
      setError2Message("Incorreto!");
      // Handle the error case
    }

    if (fo3 === 30 && fa3 === 70 && mg3 === 0.3 && fe3 === 0.7) {
      setSuccess3Message("Correto!");
    } else {
      setError3Message("Incorreto!");
      // Handle the error case
    }

    if (fo4 === 45 && fa4 === 55 && mg4 === 0.45 && fe4 === 0.55) {
      setSuccess4Message("Correto!");
    } else {
      setError4Message("Incorreto!");
      // Handle the error case
    }

    if (fo5 === 75 && fa5 === 25 && mg5 === 0.75 && fe5 === 0.25) {
      setSuccess5Message("Correto!");
    } else {
      setError5Message("Incorreto!");
      // Handle the error case
    }

    if (fo6 === 70 && fa6 === 30 && mg6 === 0.7 && fe6 === 0.3) {
      setSuccess6Message("Correto!");
    } else {
      setError6Message("Incorreto!");
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
                  <input
                    className="text-red-600 w-[4.6rem] border-b-2 border-red-500"
                    value={mg1Value}
                    onChange={(e) => setMg1Value(e.target.value)}
                  />
                </span>
                Fe
                <span className="text-red-600">
                  {" "}
                  <input
                    className="text-red-600 w-[4.6rem] border-b-2 border-red-500"
                    value={fe1Value}
                    onChange={(e) => setFe1Value(e.target.value)}
                  />
                </span>
                )2SiO4
              </h2>
              {success1Message ? (
                <div className="absolute right-[305px] text-green-600 text-xl font-bold my-4">
                  {success1Message}
                </div>
              ) : error1Message ? (
                <div className="absolute right-[305px] text-red-600 text-xl font-bold my-4">
                  {error1Message}
                </div>
              ) : null}
            </li>
            <li className="mt-5 mb-5 flex items-center">
              <h2 className="font-bold text-3xl">
                Fo
                <sub className="text-red-600">
                  {" "}
                  <input
                    className="text-red-600 w-8 border-b-2 border-red-500"
                    value={fo2Value}
                    onChange={(e) => setFo2Value(e.target.value)}
                  />
                </sub>
                Fa
                <sub className="text-red-600">
                  {" "}
                  <input
                    className="text-red-600 w-8 border-b-2 border-red-500"
                    value={fa2Value}
                    onChange={(e) => setFa2Value(e.target.value)}
                  />
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <span className="text-red-600">
                  {" "}
                  <input
                    className="text-red-600 w-[4.6rem] border-b-2 border-red-500"
                    value={mg2Value}
                    onChange={(e) => setMg2Value(e.target.value)}
                  />
                </span>
                Fe
                <span className="text-red-600">
                  {" "}
                  <input
                    className="text-red-600 w-[4.6rem] border-b-2 border-red-500"
                    value={fe2Value}
                    onChange={(e) => setFe2Value(e.target.value)}
                  />
                </span>
                )2SiO4
              </h2>
              {success2Message ? (
                <div className="absolute right-[305px] text-green-600 text-xl font-bold my-4">
                  {success2Message}
                </div>
              ) : error2Message ? (
                <div className="absolute right-[305px] text-red-600 text-xl font-bold my-4">
                  {error2Message}
                </div>
              ) : null}
            </li>
            <li className="flex items-center">
              <h2 className="font-bold text-3xl">
                Fo
                <sub className="text-red-600">
                  {" "}
                  <input
                    className="text-red-600 w-8 border-b-2 border-red-500"
                    value={fo3Value}
                    onChange={(e) => setFo3Value(e.target.value)}
                  />
                </sub>
                Fa
                <sub className="text-red-600">
                  {" "}
                  <input
                    className="text-red-600 w-8 border-b-2 border-red-500"
                    value={fa3Value}
                    onChange={(e) => setFa3Value(e.target.value)}
                  />
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <span className="text-red-600">
                  {" "}
                  <input
                    className="text-red-600 w-[4.6rem] border-b-2 border-red-500"
                    value={mg3Value}
                    onChange={(e) => setMg3Value(e.target.value)}
                  />
                </span>
                Fe
                <span className="text-red-600">
                  {" "}
                  <input
                    className="text-red-600 w-[4.6rem] border-b-2 border-red-500"
                    value={fe3Value}
                    onChange={(e) => setFe3Value(e.target.value)}
                  />
                </span>
                )2SiO4
              </h2>
              {success3Message ? (
                <div className="absolute right-[305px] text-green-600 text-xl font-bold my-4">
                  {success3Message}
                </div>
              ) : error3Message ? (
                <div className="absolute right-[305px] text-red-600 text-xl font-bold my-4">
                  {error3Message}
                </div>
              ) : null}
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
                  <input
                    className="text-red-600 w-8 border-b-2 border-red-500"
                    value={fo4Value}
                    onChange={(e) => setFo4Value(e.target.value)}
                  />
                </sub>
                Fa
                <sub className="text-red-600">
                  {" "}
                  <input
                    className="text-red-600 w-8 border-b-2 border-red-500"
                    value={fa4Value}
                    onChange={(e) => setFa4Value(e.target.value)}
                  />
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" 
                value={mg4Value}
                onChange={(e) => setMg4Value(e.target.value)}
                />
                Fe
                <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" 
                value={fe4Value}
                onChange={(e) => setFe4Value(e.target.value)}
                />
                2SiO4
              </h2>
              {success4Message ? (
                <div className="absolute right-[305px] text-green-600 text-xl font-bold my-4">
                  {success4Message}
                </div>
              ) : error4Message ? (
                <div className="absolute right-[305px] text-red-600 text-xl font-bold my-4">
                  {error4Message}
                </div>
              ) : null}
            </li>
            <li className="mt-5 mb-5 flex items-center">
              <h2 className="font-bold text-3xl">
                Fo
                <sub className="text-red-600">
                  <input className="text-red-600 w-10 border-b-2 border-red-500" 
                  value={fo5Value}
                  onChange={(e) => setFo5Value(e.target.value)}
                  />
                </sub>
                Fa
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-8 border-b-2 border-red-500" 
                  value={fa5Value}
                  onChange={(e) => setFa5Value(e.target.value)}
                  />
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" 
                  value={mg5Value}
                  onChange={(e) => setMg5Value(e.target.value)}
                  />
                </span>
                Fe
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" 
                  value={fe5Value}
                  onChange={(e) => setFe5Value(e.target.value)}
                  />
                </span>
                )2SiO4
              </h2>
              {success5Message ? (
                <div className="absolute right-[305px] text-green-600 text-xl font-bold my-4">
                  {success5Message}
                </div>
              ) : error5Message ? (
                <div className="absolute right-[305px] text-red-600 text-xl font-bold my-4">
                  {error5Message}
                </div>
              ) : null}
            </li>
            <li className="flex items-center">
              <h2 className="font-bold text-3xl">
                Fo
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-8 border-b-2 border-red-500" 
                  value={fo6Value}
                  onChange={(e) => setFo6Value(e.target.value)}
                  />
                </sub>
                Fa
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-8 border-b-2 border-red-500" 
                  value={fa6Value}
                  onChange={(e) => setFa6Value(e.target.value)}
                  />
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" 
                  value={mg6Value}
                  onChange={(e) => setMg6Value(e.target.value)}
                  />
                </span>
                Fe
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-[4.6rem] border-b-2 border-red-500" 
                  value={fe6Value}
                  onChange={(e) => setFe6Value(e.target.value)}
                  />
                </span>
                )2SiO4
              </h2>
              {success6Message ? (
                <div className="absolute right-[305px] text-green-600 text-xl font-bold my-4">
                  {success6Message}
                </div>
              ) : error6Message ? (
                <div className="absolute right-[305px] text-red-600 text-xl font-bold my-4">
                  {error6Message}
                </div>
              ) : null}
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
    </>
  );
}
