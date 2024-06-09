"use client";

import { useState } from "react";
import Filters from "./components/Filters";
import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";

export default function Home() {
  const [dogImages, setDogImages] = useState<string[]>([]);
  return (
    <>
      <main>
        <NavBar />
        <Filters handleSetDogsImages={setDogImages} />
        <Gallery images={dogImages} />
      </main>

      <footer className="text-center mt-3">Created by Nelson Rojas</footer>
    </>
  );
}
