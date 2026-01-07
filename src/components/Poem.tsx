import { Button } from "@/components/ui/button";

interface PoemProps {
  onFinish: () => void;
}

const Poem = ({ onFinish }: PoemProps) => {
  return (
    <div className="max-w-lg w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 animate-fade-in">
      <div className="text-center">
        <p className="text-stone-400 text-sm uppercase tracking-widest mb-4">
          Poema autoral
        </p>

        <h2 className="text-2xl font-light text-stone-800 mb-8">
          Para Mariana
        </h2>

        <div className="text-stone-600 text-lg leading-relaxed mb-8 font-light italic space-y-6">
          <p>
            não sei se pertenço a esse mundo<br />
            às vezes me sinto estranho<br />
            me encontro em algum canto<br />
            mas quase sempre no lugar errado
          </p>

          <p>
            acordo cedo pensando nos seus lábios<br />
            no sorriso que acende as luzes da cidade<br />
            na sua pele branca<br />
            até seu nome me encanta:<br />
            mariana
          </p>

          <p>
            eu sei que não sou poeta<br />
            não tenho fama, nem carro do ano<br />
            não tenho muito a oferecer<br />
            mas faria qualquer coisa por você
          </p>

          <p>
            só te peço uma chance<br />
            e nada mais
          </p>
        </div>

        <Button
          onClick={onFinish}
          className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Poem;
