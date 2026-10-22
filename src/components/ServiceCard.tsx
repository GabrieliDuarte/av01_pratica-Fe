
import { useState } from "react";
import Button from "../Button/Button";

type ServicoCardProps = {
  nome: string;
  info: string;
};

export default function ServicoCard({ nome, info }: ServicoCardProps) {
  const [favorito, setFavorito] = useState(false);

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-3 hover:bg-soft hover:shadow-md">
      <h3 className="font-bold text-ink">{nome}</h3>
      <p className="mb-3 text-sm text-gray-600">{info}</p>
      <div className="flex items-center justify-between">
        <Button>Saiba mais</Button>
        <button
          aria-label={favorito ? `Remover ${nome} dos favoritos` : `Adicionar ${nome} aos favoritos`}
          onClick={() => setFavorito(!favorito)}
          className="text-xl text-primary"
        >
          {favorito ? "♥" : "♡"}
        </button>
      </div>
    </article>
  );
}