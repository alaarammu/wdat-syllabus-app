"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [open, setOpen] = useState(true);
  return (
    <div className="color-white flex">
    <Navbar open={open} setOpen={setOpen}   />

    <header className="flex">
      <div className="p-10">
        <h1 className="flex text-4xl font-semibold text-dark-purple">
          WeDoAllTech
        </h1>
        <h2 className="flex text-dark-purple pt-3">
          At WedoAllTech, we’re all about making tech easy for everyone. From
          sleek UX/UI design to smooth web and app development, we’ve got you
          covered.
        </h2>
        <h3 className="bg-white text-dark-purple pt-3">
          Start your tech journey here!
        </h3>
        <img
          src="/images/bg.png"
          alt="Image Description"
          className="bg-white flex h-13 w-13 l-13"
        />
      </div>
    </header>
  </div>
  );
}
