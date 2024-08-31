'use client';
import Navbar from "./components/common/Navbar";
import DropdownMenu from "./components/ui/DropDown";

export default function Home() {

  return (
    <main>
      <Navbar showTutorials />

      <DropdownMenu align="left" label={<span className="text-gray-700 dark:text-white">User Menu</span>}>
        <DropdownMenu.Item label="Account settings"/>
        <DropdownMenu.Item label="Support" />
        <DropdownMenu.Item label="License" />
        <DropdownMenu.Item label="Sign out" />
      </DropdownMenu>

      <h1>This is h1 tag</h1>

    </main>
  );
}