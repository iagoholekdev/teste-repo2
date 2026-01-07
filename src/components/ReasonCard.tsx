import { Button } from "@/components/ui/button";

interface ReasonCardProps {
  number: number;
  title: string;
  description: string;
  image?: string;
  onNext: () => void;
  isLast: boolean;
}

const ReasonCard = ({ number, title, description, image, onNext, isLast }: ReasonCardProps) => {
  return (
    <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 animate-fade-in">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-stone-800 text-white rounded-full text-xl font-medium mb-6">
          {number}
        </div>
        
        <h2 className="text-2xl font-light text-stone-800 mb-4">{title}</h2>
        
        {image && (
         <div className="mb-6 rounded-xl overflow-hidden bg-stone-100">
            <img
                src={image}
                alt={`Motivo ${number}`}
                className="w-full max-h-64 object-contain mx-auto"
            />
            </div>
        )}
        
        <p className="text-stone-600 text-lg leading-relaxed mb-8">
          {description}
        </p>
        
        <Button
          onClick={onNext}
          className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          {isLast ? "E tem mais..." : "Próximo"}
        </Button>
      </div>
    </div>
  );
};

export default ReasonCard;
