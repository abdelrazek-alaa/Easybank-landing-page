import { data } from "../data";
export default function Logo({ footer }) {
  return (
    <div>
      {footer ? (
        <img src={data.logo.footer} alt="logo" className="h-5" />
      ) : (
        <img src={data.logo.img} alt="logo" className="h-5" />
      )}
    </div>
  );
}
