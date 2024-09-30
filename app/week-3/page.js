import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="flex flex-col items-start p-6 bg-black min-h-screen w-full">
      <h1 className="text-3xl font-bold mb-4 text-white">Shopping List</h1>
      <div className="w-full max-w-xl">
        <ItemList />
      </div>
    </main>
  );
};

export default Page;
