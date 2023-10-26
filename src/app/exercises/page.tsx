import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-10">
                Título do exercício
              </h1>
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
