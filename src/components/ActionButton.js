import { data } from "../data";

export default function ActionButton() {
  return (
    <button className="bg-lime-green rounded-full bg-gradient-to-r from-lime-green to-bright-cyan hover:from-lime-500 hover:to-cyan-400 text-white py-2 px-6 font-semibold max-h-10">
      {data.header.mainButton}
    </button>
  );
}
