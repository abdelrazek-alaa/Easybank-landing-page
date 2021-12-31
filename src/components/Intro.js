import { data } from "../data";
import ActionButton from "./ActionButton";
export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center 2xl:container 2xl:mx-auto">
      {/* intro image */}
      <div className="bg-mobile md:bg-desktop bg-no-repeat bg-cover flex-1">
        <img
          className="theme-object-position"
          src={data.intro.images.main}
          alt="intro"
        />
      </div>
      {/* intro text */}
      <div className="flex-1">
        <div className="px-8 xl:px-20 space-y-4 text-center md:text-left lg:ml-12">
          <h1 className="text-3xl lg:text-5xl text-dark-blue">
            {data.intro.headingText}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-grayish-blue">
            {data.intro.paragraph}
          </p>
          <ActionButton />
        </div>
      </div>
    </div>
  );
}
