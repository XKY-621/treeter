import Head from "next/head";
import ListTreets from "./components/ListTreets";
import InputTree from "./components/InputTreet";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Treeter</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-gray-100">
        <div className="flex flex-row justify-center items-center p-3 bg-white">
          <div className="flex-none">
            <i className="fa fa-tree text-green-800"></i>
            <span className="m-3 text-xl">Treeter</span>
          </div>
          <div className="m-3 w-150 flex flex-row justify-center">
            <div className="rounded-md bg-green-100 text-green-800 py-1 px-2 mx-3 cursor-pointer">
              Home
            </div>
            <div className="transition duration-300 ease-in-out mx-3 py-1 px-2 hover:bg-gray-100 rounded-md cursor-pointer">
              Explore
            </div>
            <div className="transition duration-300 ease-in-out mx-3 py-1 px-2 hover:bg-gray-100 rounded-md cursor-pointer">
              Latest
            </div>
          </div>
          <div className="flex-none">
            <i className="fa fa-chevron-down m-2"></i>
            <span>Orla McNeil</span>
          </div>
        </div>
        <div className="flex flex-row h-screen justify-center">
          <div className="bg-gray-100 w-60 ">
            <div className="bg-white shadow-sm h-40 w-50 m-4 rounded-md p-3">
              <div className="flex flex-col justify-between text-gray-500 h-full">
                <div className="text-gray-900 border-l-2 border-green-700 pl-2 font-bold">
                  top
                </div>
                <div>Latest</div>
                <div>people</div>
                <div>media</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 w-150 flex-none">
            <InputTree></InputTree>
            <ListTreets></ListTreets>
          </div>
          <div className="bg-gray-100 w-60">
            <div className="bg-white shadow-sm h-120 w-50 m-4 rounded-md p-3">
              <div className="flex flex-col justify-between text-gray-500 h-full"></div>
            </div>
          </div>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}
