import React from "react";
import { Vortex } from "../../app/components/ui/vortex";
import { Button } from "./ui/moving-border";
import { Link } from "@nextui-org/react";
import { MovingBorderDemo } from "./button";

export function VortexDemo() {
  return (
    <div>

    <div className="w-[calc(100%)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
         Get In Touch
        </h2>
        <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">
        I'm eager to connect and explore exciting opportunities with you. Whether it's discussing innovative projects, sharing creative ideas, or simply having a conversation, I'm here and available. Please don't hesitate to reach out—my inbox is open 24/7.
        </p>
        <MovingBorderDemo />

        <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">
          Email: sameerselokar9823@gmail.com <br />
          Phone: (+91) 9860968136
        </p>
        
      </Vortex>
      
    </div>
    <footer className="flex justify-center py-5">
          <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">
            &copy; 2024 Sameer Selokar. All rights reserved.
          </p>
        </footer>
    </div>
  );
}
