'use client';
import { IconMenu2 } from "@tabler/icons-react";
import Drawer from "./components/common/Drawer";
import { useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitch";

export default function Home() {

  return (
    <main>
      <ThemeSwitcher/>
    </main>
  );
}