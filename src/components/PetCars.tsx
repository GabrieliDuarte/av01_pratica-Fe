import { useState } from "react";
import Button from "./Button";
type PetCardProps = {
  nome: string;
  especie: string;
  raca: string;
  tutor: string;
  imagem: string;
};

export default function PetCard({ nome, especie, raca, tutor, imagem }: PetCardProps) {
  const [favorito, setFavorito] = useState(false);

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-3 hover:bg-soft hover:shadow-md">
      <img src={imagem} alt={`${especie} ${nome}, ${raca}`} className="w-full rounded-lg" />
      <div className="mt-2 flex items-center justify-between">
        <h3 className="font-bold text-ink">{nome}</h3>
        <button
          aria-label={favorito ? `Remover ${nome} dos favoritos` : `Adicionar ${nome} aos favoritos`}
          onClick={() => setFavorito(!favorito)}
          className="text-xl text-primary"
        >
          {favorito ? "♥" : "♡"}
        </button>
      </div>
      <p className="text-sm text-gray-600">{especie}</p>
      <p className="text-sm text-gray-600">{raca}</p>
      <p className="mb-3 text-sm text-gray-600">Tutor: {tutor}</p>
      <Button>Saiba mais</Button>
    </article>
  );
}