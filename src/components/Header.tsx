

import Button from "./Button";
export default function Header() {
  return (
    <header className="flex items-center justify-between bg-soft px-6 py-4">
      <img src="/img/logo.svg" alt="PetCare" className="h-8" />
      <nav aria-label="Principal">
        <Button>Lista de favoritos</Button>
      </nav>
    </header>
  );
}