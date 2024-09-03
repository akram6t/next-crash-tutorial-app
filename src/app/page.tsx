'use client';
import Navbar from "./components/common/Navbar";
import TutorialsCards from "./components/tutorial/TutorialsCards";
import { Button } from "./components/ui/button";


export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <TutorialsCards/>



        <Button>Submit</Button>

        <h1>This is h1 tag</h1>

      </main>
    </>
  );
}