import { data } from "../data";
export default function Logo() {
  return (
    <div>
      <img src={data.logo} alt="logo" className="h-5" />
    </div>
  );
}
