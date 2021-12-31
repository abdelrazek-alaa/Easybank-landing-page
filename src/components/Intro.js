import { data } from "../data";
import ActionButton from "./ActionButton";
export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center">
      {/* intro image */}
      <div className="bg-mobile bg-no-repeat flex-1">
        <img
          className="h-96 mobile-object-position"
          src={data.intro.images.main}
          alt="intro"
        />
      </div>
      {/* intro text */}
      <div className="space-y-4 text-center flex-1">
        <h1 className="text-3xl text-dark-blue">{data.intro.headingText}</h1>
        <p className="text-sm sm:text-base text-grayish-blue">
          {data.intro.paragraph}
        </p>
        <ActionButton />
      </div>
    </div>
  );
}
