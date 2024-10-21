import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import LOGO from "../../ASSETS/img.png";
import Image from "next/image";



export default function App() {
  return (
    <Navbar className="w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border shadow-lg fixed z-30">
      <NavbarBrand className="flex items-center">
        <Image src={LOGO} alt="Logo" className="w-12 h-auto" />
       
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#home" className="hover:text-gray-600">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#about" className="hover:text-gray-600">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#project" className="hover:text-gray-600">
            Project
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact" className="hover:text-gray-600">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-gradient-to-r from-amber-400 to-pink-500 hover:text-white border"
            variant="flat"
            href="https://www.papermark.io/view/cm2ivgkaw0001sa1owjt267eb"
          > 
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
