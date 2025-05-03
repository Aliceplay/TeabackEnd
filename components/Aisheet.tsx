"use client";
import React, { FC } from "react";
import { Button } from "@/components/ui/button";

import { fromTheme } from "tailwind-merge";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];
interface AISheetProps {
  side: SheetSide;
}

export function AISheet({ side }: AISheetProps) {
  return (
    
  );
}
export default AISheet;
