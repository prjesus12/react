import Router from "./Router";
import React, { useState } from "react";
function App() {
  const [drawer, setDrawer] = useState(false);

  const drawerClass = () => {
    if (drawer) {
      return "sm:hidden w-64 z-30 bg-purple-500 fixed overflow-auto transform  right-0 duration-300 min-h-screen";
    } else {
      return "sm:hidden w-64 z-30 bg-purple-500 fixed overflow-auto transform  right-0 translate-x-full duration-300 min-h-screen";
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <header className="bg-purple-500">
        <nav className="flex items-center justify-between  container mx-auto py-3 px-3 sm:px-0">
          <div className="text-xl text-white flex">
            <div>Logo</div>
          </div>
          <div className="hidden sm:flex space-x-6">
            <div className="text-xl text-white">Home</div>
            <div className="text-xl text-white">Service</div>
            <div className="text-xl text-white">About</div>
            <div className="text-xl text-white">Pages</div>
            <div className="text-xl text-white">Blocks</div>
            <div className="text-xl text-white">Contact</div>
          </div>
          <svg
            onClick={() => setDrawer(!drawer)}
            className="block w-6 z-40 text-white sm:hidden"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </nav>
      </header>
      <aside className={drawerClass()}>
        <div className="flex flex-col items-center pt-12">
          <div className="text-xl text-white">Home</div>
          <div className="text-xl text-white">Service</div>
          <div className="text-xl text-white">About</div>
          <div className="text-xl text-white">Pages</div>
          <div className="text-xl text-white">Blocks</div>
          <div className="text-xl text-white">Contact</div>
        </div>
      </aside>
      <main className="container mx-auto py-5 mb-10 flex-1 overflow-y-auto px-2 sm:px-0">
        <Router />
      </main>
    </div>
  );
}

export default App;
