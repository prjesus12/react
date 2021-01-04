import React from "react";

function Loop() {
  let rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(
      <div key={i}>
        <img
          className="rounded-full p-4"
          src="http://placeimg.com/640/480/animals"
          alt=""
        />
      </div>
    );
  }
  return rows;
}

function Home() {
  return (
    <div className="page">
      <div className="flex justify-center items-center">
        <div className="bg-purple-500 p-2 rounded-b-lg transform -translate-y-5">
          <div className="sm:text-4xl text-white text-center">Welcome</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-2">{Loop()}</div>
      </div>
    </div>
  );
}

export default Home;
