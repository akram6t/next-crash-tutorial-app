'use client';
import { IconMenu2 } from "@tabler/icons-react";
import Drawer from "./components/ui/Drawer";
import { useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitch";
import Navbar from "./components/common/Navbar";
import TutorialsItems from "./components/TutorialsItems";
import DropdownMenu from "./components/ui/DropDown";

export default function Home() {

  return (
    <main>
      <Navbar showTutorials />
      <h1>This is h1 tag</h1>
      <DropdownMenu label="User Menu">
        <DropdownMenu.Item label="Account settings" href="/account" />
        <DropdownMenu.Item label="Support" href="/support" />
        <DropdownMenu.Item label="License" href="/license" />
        <DropdownMenu.Item label="Sign out" href="/signout" />
      </DropdownMenu>

    </main>
  );
}