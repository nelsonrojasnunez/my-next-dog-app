import Filters from "./components/Filters";
import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Filters />
        <Gallery />
      </main>

      <footer className="text-center mt-3">Created by Nelson Rojas</footer>
    </>
  );
}
