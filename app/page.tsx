"use client";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const [showFacts, setShowFacts] = useState(false);
  const { theme, setTheme } = useTheme(); // Use the useTheme hook

  const funFacts = [
    "Did you know? Honey never spoils.",
    "Bananas are berries, but strawberries aren't.",
    "A group of flamingos is called a 'flamboyance'.",
    "Octopuses have three hearts.",
    "A jiffy is an actual unit of time: 1/100th of a second."
  ];

  return (
    <div>
      <h1>Hello Friday Wins!</h1>
      <button onClick={() => setShowFacts(!showFacts)}>
        {showFacts ? "Hide Fun Facts" : "Show Fun Facts"}
      </button>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
      {showFacts && (
        <ul>
          {funFacts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
