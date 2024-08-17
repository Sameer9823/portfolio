"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import {Link} from '@nextui-org/react'
export function MovingBorderDemo() {
  return (
    <div>
     <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link href="https://www.linkedin.com/in/sameer-selokar-60435224b/">
          <Button
        borderRadius="1.75rem"
        className="bg-black text-white dark:bg-slate-900  dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Contact 
      </Button>
          </Link>
        </div>
    </div>
  );
}
