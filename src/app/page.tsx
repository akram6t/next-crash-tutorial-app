'use client';
import Navbar from "./components/common/Navbar";
import { Button } from "./components/ui/button";

export default function Home() {

  return (
    <>
      <Navbar showTutorials />
      <main className="p-3">

        <Button>Submit</Button>

        <h1>This is h1 tag</h1>

      </main>
    </>
  );
}