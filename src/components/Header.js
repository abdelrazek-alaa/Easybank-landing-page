import Navigation from "./Navigation";
import ActionButton from "./ActionButton";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center relative">
      <Logo />
      <Navigation />
      <div className="hidden sm:block">
        <ActionButton />
      </div>
    </header>
  );
}
