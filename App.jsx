// Importaciones necesarias
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Lista de ejemplo con algunos actores (puedes expandir a 100 luego)
const ACTORS = [
  {
    name: "Zendaya",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Zendaya_2019.png",
    options: ["Zendaya", "Emma Stone", "Millie Bobby Brown"],
  },
  {
    name: "Timothée Chalamet",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Timothee_Chalamet-2019.jpg",
    options: ["Tom Holland", "Timothée Chalamet", "Chris Evans"],
  },
  {
    name: "Margot Robbie",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Margot_Robbie_2018.jpg",
    options: ["Scarlett Johansson", "Jennifer Lawrence", "Margot Robbie"],
  },
];

export default function ActorGuessingGame() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = ACTORS[index % ACTORS.length];

  const handleAnswer = (option) => {
    setSelected(option);
    setShowAnswer(true);
    setTimeout(() => {
      setSelected(null);
      setShowAnswer(false);
      setIndex((prev) => prev + 1);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md p-4">
        <CardContent className="flex flex-col items-center">
          <img
            src={current.image}
            alt="Actor"
            className="rounded-xl w-64 h-64 object-cover mb-4"
          />
          <div className="grid grid-cols-1 gap-2 w-full">
            {current.options.map((option, i) => (
              <Button
                key={i}
                variant="outline"
                onClick={() => handleAnswer(option)}
                className={
                  showAnswer
                    ? option === current.name
                      ? "border-green-500 text-green-600"
                      : option === selected
                      ? "border-red-500 text-red-600"
                      : ""
                    : ""
                }
              >
                {option}
              </Button>
            ))}
          </div>
          {showAnswer && (
            <div className="mt-4 text-sm text-gray-600">
              La respuesta correcta es: <strong>{current.name}</strong>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
