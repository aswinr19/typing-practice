"use client";

import React, { useState, useEffect } from "react";
import Keyboard from "@/components/Keyboard";
import { KeyType } from "@/types/types";

const qwerty_layout: KeyType[] = [
  { id: 0, label: "`", type: "", value: "", beingPressed: true },
  { id: 1, label: "1", type: "", value: "", beingPressed: false },
  { id: 2, label: "2", type: "", value: "", beingPressed: false },
  { id: 3, label: "3", type: "", value: "", beingPressed: false },
  { id: 4, label: "4", type: "", value: "", beingPressed: false },
  { id: 5, label: "5", type: "", value: "", beingPressed: false },
  { id: 6, label: "6", type: "", value: "", beingPressed: false },
  { id: 7, label: "7", type: "", value: "", beingPressed: false },
  { id: 8, label: "8", type: "", value: "", beingPressed: false },
  { id: 9, label: "9", type: "", value: "", beingPressed: false },
  { id: 10, label: "0", type: "", value: "", beingPressed: false },
  { id: 11, label: "-", type: "", value: "", beingPressed: false },
  { id: 12, label: "=", type: "", value: "", beingPressed: false },
  { id: 13, label: "backspace", type: "", value: "", beingPressed: false },
  { id: 14, label: "tab", type: "", value: "", beingPressed: false },
  { id: 15, label: "Q", type: "", value: "", beingPressed: false },
  { id: 16, label: "W", type: "", value: "", beingPressed: false },
  { id: 17, label: "E", type: "", value: "", beingPressed: false },
  { id: 18, label: "R", type: "", value: "", beingPressed: false },
  { id: 19, label: "T", type: "", value: "", beingPressed: false },
  { id: 20, label: "Y", type: "", value: "", beingPressed: false },
  { id: 21, label: "U", type: "", value: "", beingPressed: false },
  { id: 22, label: "I", type: "", value: "", beingPressed: false },
  { id: 23, label: "O", type: "", value: "", beingPressed: false },
  { id: 24, label: "P", type: "", value: "", beingPressed: false },
  { id: 25, label: "[", type: "", value: "", beingPressed: false },
  { id: 26, label: "]", type: "", value: "", beingPressed: false },
  { id: 27, label: "\\", type: "", value: "", beingPressed: false },
  { id: 28, label: "caps lock", type: "", value: "", beingPressed: false },
  { id: 29, label: "A", type: "", value: "", beingPressed: false },
  { id: 30, label: "S", type: "", value: "", beingPressed: false },
  { id: 31, label: "D", type: "", value: "", beingPressed: false },
  { id: 32, label: "F", type: "", value: "", beingPressed: false },
  { id: 33, label: "F", type: "", value: "", beingPressed: false },
  { id: 34, label: "G", type: "", value: "", beingPressed: false },
  { id: 35, label: "H", type: "", value: "", beingPressed: false },
  { id: 36, label: "J", type: "", value: "", beingPressed: false },
  { id: 37, label: "K", type: "", value: "", beingPressed: false },
  { id: 38, label: "L", type: "", value: "", beingPressed: false },
  { id: 39, label: ";", type: "", value: "", beingPressed: false },
  { id: 40, label: "'", type: "", value: "", beingPressed: false },
  { id: 41, label: "enter", type: "", value: "", beingPressed: false },
  { id: 42, label: "shift", type: "", value: "", beingPressed: false },
  { id: 43, label: "Z", type: "", value: "", beingPressed: false },
  { id: 44, label: "X", type: "", value: "", beingPressed: false },
  { id: 45, label: "C", type: "", value: "", beingPressed: false },
  { id: 46, label: "V", type: "", value: "", beingPressed: false },
  { id: 47, label: "B", type: "", value: "", beingPressed: false },
  { id: 48, label: "N", type: "", value: "", beingPressed: false },
  { id: 49, label: "M", type: "", value: "", beingPressed: false },
  { id: 50, label: ",", type: "", value: "", beingPressed: false },
  { id: 51, label: ".", type: "", value: "", beingPressed: false },
  { id: 52, label: "/", type: "", value: "", beingPressed: false },
  { id: 53, label: "shift", type: "", value: "", beingPressed: false },
  { id: 54, label: "ctrl", type: "", value: "", beingPressed: false },
  { id: 55, label: "fn", type: "", value: "", beingPressed: false },
  { id: 56, label: "win", type: "", value: "", beingPressed: false },
  { id: 57, label: "alt", type: "", value: "", beingPressed: false },
  { id: 58, label: "alt", type: "", value: "", beingPressed: false },
  { id: 59, label: "ctrl", type: "", value: "", beingPressed: false },
  { id: 60, label: "left", type: "", value: "", beingPressed: false },
  { id: 61, label: "up", type: "", value: "", beingPressed: false },
  { id: 62, label: "down", type: "", value: "", beingPressed: false },
  { id: 63, label: "right", type: "", value: "", beingPressed: false },
];

export default function Home() {
  const [currentLayout, setCurrentLayout] = useState<KeyType[]>([]);

  useEffect(() => {
    setCurrentLayout(qwerty_layout);
  }, []);

  return <Keyboard {...currentLayout} />;
}
