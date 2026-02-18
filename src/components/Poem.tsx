import { Button } from "@/components/ui/button";

interface PoemProps {
  onFinish: () => void;
}

const Poem = ({ onFinish }: PoemProps) => {
  return (
    <div className="max-w-lg w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 animate-fade-in">
      <div className="text-center">
        <p className="text-stone-400 text-sm uppercase tracking-widest mb-4">
          pensamentos aleatórios da minha cabeça maluca
        </p>

        <h2 className="text-2xl font-light text-stone-800 mb-8">
          Para Laura
        </h2>

        <div className="text-stone-600 text-lg leading-relaxed mb-8 font-light italic space-y-6">
        <p>
        meu celular vibra, é o banco ligando<br />
        e não é você
        </p>

        <p>
        à noite meu quarto esfria,<br />
        tô deitado sozinho<br />
        e não com você
        </p>

        <p>
        coloco qualquer roupa<br />
        e saio pra rua pegar um ar porque eu tô mal<br />
        </p>

        <p>
        me sinto estranho, fora do normal<br />
        entro no chuveiro começo a lembrar de tudo o que aconteceu,<br />
        fico horas relembrando de cada detalhe seu
        </p>

        <p>
        se seu carro ficar sem bateria<br />
        já sabe pra quem ligar<br />
        eu atravesso a cidade inteira<br />
        só pra fazer ele pegar
        </p>

        <p>
        e se ele estiver sujo<br />
        eu ajudo a limpar
        </p>

        <p>
        porque eu sei que você odeia<br />
        quando algo foge do seu alcance<br />
        uma das partes mais lindas em você<br />
        é querer ajudar<br />
        mesmo quando isso é desgastante
        </p>

        <p>
        eu admiro que você acorda tão cedo<br />
        o galo mal cantou<br />
        e você já levantou primeiro
        </p>

        <p>
        o jeito que você escreve<br />
        é tão perfeito<br />
        a paciência que você tem comigo<br />
        e com o meu jeito
        </p>

        <p>
        e talvez você nem perceba<br />
        o quanto isso tudo me pega
        </p>

        <p>
        porque não é só saudade<br />
        não é só querer estar junto
        </p>

        <p>
        é admirar quem você é<br />
        até nos detalhes pequenos<br />
        até no carro que você acha que tá sujo<br />
        até no cansaço de um dia corrido
        </p>

        <p>
        e ainda assim<br />
        te achar<br />
        a coisa mais bonita<br />
        que me aconteceu
        </p>

        <p>
        Laura
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
