import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ReasonCard from "@/components/ReasonCard";
import Poem from "@/components/Poem";
import FinalQuestion from "@/components/FinalQuestion";

import reason1 from "@/assets/dog.jpeg";
import reason2 from "@/assets/churras.jpeg";
import reason3 from "@/assets/nerd.jpeg";
import reason4 from "@/assets/gremio.jpeg";
import reason5 from "@/assets/ela.jpeg";

const reasons = [
  { id: 1, title: "Os bichos me adoram", description: "Quer uma green flag maior que essa?", image: reason1 },
  { id: 2, title: "Sou um baita cozinheiro", description: "Faria tudo o que você gosta de comer", image: reason2 },
  { id: 3, title: "Nerdola", description: "Quer um cartão black clonado só pra você? Quer que eu hackeie um banco?", image: reason3 },
  { id: 4, title: "Gremista", description: "Todo mundo sabe que você é gremista fanática", image: reason4 },
  { id: 5, title: "Eu só penso em você", description: "Precisa de descrição? Olha esse sorriso", image: reason5 },
];

const Index = () => {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showPoem, setShowPoem] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [dots, setDots] = useState(".");

  useEffect(() => {
    if (!started || currentStep !== 0) return;

    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? "." : prev + "."));
    }, 1000);

    const timeout = setTimeout(() => {
      setCurrentStep(1);
    }, 3000);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(timeout);
    };
  }, [started, currentStep]);

  const handleStart = () => {
    setStarted(true);
    setCurrentStep(0);
    setDots(".");
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentStep(0);
    setShowPoem(false);
    setShowQuestion(false);
    setDots(".");
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowPoem(true);
    }
  };

  const handlePoemFinish = () => {
    setShowPoem(false);
    setShowQuestion(true);
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 flex items-center justify-center p-4">
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-light text-stone-800 mb-4 tracking-tight">
            E aí, tudo bem?
          </h1>
          <p className="text-stone-500 mb-10 text-lg">Tenho uma coisa pra te mostrar</p>
          <Button
            onClick={handleStart}
            className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Clique aqui
          </Button>
        </div>
      </div>
    );
  }

  if (started && currentStep === 0 && !showPoem && !showQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 flex items-center justify-center p-4">
        <h1 className="text-3xl md:text-5xl font-light text-stone-800 text-center animate-fade-in">
          5 motivos para você topar sair comigo{dots}
        </h1>
      </div>
    );
  }

  if (currentStep >= 1 && currentStep <= 5 && !showPoem && !showQuestion) {
    const reason = reasons[currentStep - 1];
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 flex items-center justify-center p-4">
        <ReasonCard
          number={reason.id}
          title={reason.title}
          description={reason.description}
          image={reason.image}
          onNext={handleNext}
          isLast={currentStep === 5}
        />
      </div>
    );
  }

  if (showPoem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 flex items-center justify-center p-4">
        <Poem onFinish={handlePoemFinish} />
      </div>
    );
  }

  if (showQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 flex items-center justify-center p-4">
        <FinalQuestion onRestart={handleRestart} />
      </div>
    );
  }

  return null;
};

export default Index;
