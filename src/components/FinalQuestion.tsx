import { useState } from "react";
import { Button } from "@/components/ui/button";
import Confetti from "@/components/Confetti";

interface FinalQuestionProps {
  onRestart?: () => void;
}

const FinalQuestion = ({ onRestart }: FinalQuestionProps) => {
  const [accepted, setAccepted] = useState(false);

  const handleYes = () => {
    setAccepted(true);
  };

  if (accepted) {
    return (
      <>
        <Confetti />
        <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 animate-fade-in text-center">
          <h2 className="text-3xl font-light text-stone-800 mb-4">
            Sabia!
          </h2>
          
          <p className="text-stone-600 text-xl leading-relaxed mb-6">
            Me chama que já tenho tudo preparado
          </p>
          
          {onRestart && (
            <Button
              onClick={onRestart}
              variant="ghost"
              className="text-stone-400 hover:text-stone-600"
            >
              Voltar ao início
            </Button>
          )}
        </div>
      </>
    );
  }

  return (
    <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-light text-stone-800 mb-8">
          Quer sair comigo?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleYes}
            className="bg-stone-800 hover:bg-stone-900 text-white px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Sim
          </Button>
          
          <Button
            disabled
            className="bg-stone-300 text-stone-400 px-10 py-6 text-xl rounded-full cursor-not-allowed opacity-50"
            title="Essa opção não funciona"
          >
            Não
          </Button>
        </div>
        
        <p className="text-stone-400 text-sm mt-6">
          (o "não" ainda está na versão beta, então não está disponível ainda)
        </p>
      </div>
    </div>
  );
};

export default FinalQuestion;