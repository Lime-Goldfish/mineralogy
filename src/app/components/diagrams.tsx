import {
  ArrowRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export function Diagrams() {
  return (
    <>
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
                Fo<sub className="text-red-600">60</sub>Fa
                <sub className="text-red-600">40</sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg<span className="text-red-600">0,6</span>Fe
                <span className="text-red-600">0,4</span>)2SiO4
              </h2>
            </li>
            <li className="mt-5 mb-5 flex items-center">
              <h2 className="font-bold text-3xl">
                Fo<sub className="text-red-600">35</sub>Fa
                <sub className="text-red-600">65</sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg<span className="text-red-600">0,35</span>Fe
                <span className="text-red-600">0,65</span>)2SiO4
              </h2>
            </li>
            <li className="flex items-center">
              <h2 className="font-bold text-3xl">
                Fo<sub className="text-red-600">30</sub>Fa
                <sub className="text-red-600">70</sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg<span className="text-red-600">0,30</span>Fe
                <span className="text-red-600">0,70</span>)2SiO4
              </h2>
            </li>
          </ul>
        </div>
      </div>
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
                  <input className="text-red-600 w-10 border-b-2 border-red-500" />
                </sub>
                Fa
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-10 border-b-2 border-red-500" />
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <input className="text-red-600 w-10 border-b-2 border-red-500" />
                Fe
                <input className="text-red-600 w-10 border-b-2 border-red-500" />
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
                  <input className="text-red-600 w-10 border-b-2 border-red-500" />
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-10 border-b-2 border-red-500" />
                </span>
                Fe
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-10 border-b-2 border-red-500" />
                </span>
                )2SiO4
              </h2>
            </li>
            <li className="flex items-center">
              <h2 className="font-bold text-3xl">
                Fo
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-10 border-b-2 border-red-500" />
                </sub>
                Fa
                <sub className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-10 border-b-2 border-red-500" />
                </sub>
              </h2>
              <ArrowRightIcon className="h-6 w-6 ml-2 font-bold" />
              <h2 className="font-bold text-3xl">
                &nbsp; (Mg
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-10 border-b-2 border-red-500" />
                </span>
                Fe
                <span className="text-red-600">
                  {" "}
                  <input className="text-red-600 w-10 border-b-2 border-red-500" />
                </span>
                )2SiO4
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
