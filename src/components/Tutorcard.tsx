import { useState } from "react";
import Button from "./Button";
type TutorCardProps = {
  iniciais: string;
  nome: string;
  pets: number;
};

export default function TutorCard({ iniciais, nome, pets }: TutorCardProps) {
  const [favorito, setFavorito] = useState(false);

  return (
    <article className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-3 hover:bg-soft hover:shadow-md">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-white"
        aria-hidden="true"
      >
        {iniciais}
      </div>
      <h3 className="font-bold text-ink">{nome}</h3>
      <p className="text-xs font-semibold text-primary">
        {pets} {pets === 1 ? "pet" : "pets"}
      </p>
      <Button>Saiba mais</Button>
      <button
        aria-label={favorito ? `Remover ${nome} dos favoritos` : `Adicionar ${nome} aos favoritos`}
        onClick={() => setFavorito(!favorito)}
        className="text-xl text-primary"
      >
        {favorito ? "♥" : "♡"}
      </button>
    </article>
  );
}