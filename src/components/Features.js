import { data } from "../data";

export default function Features() {
  return (
    <div className="bg-light-grayish-blue text-center md:text-left my-14 md:my-0 py-12 px-6">
      {/* heading text */}
      <div className="space-y-6 mb-8">
        <h1 className="text-dark-blue text-4xl">
          {data.advantages.headingText}
        </h1>
        <p className="text-grayish-blue">
          <span>{data.advantages.paragraph1}</span>
          <br className="hidden sm:inline" />
          <span>{data.advantages.paragraph2}</span>
        </p>
      </div>
      {/* features */}
      <div className="flex flex-col md:flex-row md:gap-x-6 md:flex-wrap lg:flex-nowrap md:justify-center">
        {data.advantages.features.map((feature) => (
          <div
            key={feature.headingText}
            className="mt-8 space-y-5 md:basis-2/5 lg:basis-auto"
          >
            <img src={feature.img} className="mx-auto md:mx-0" alt="feature" />
            <h3 className="text-xl text-dark-blue">{feature.headingText}</h3>
            <p className="text-grayish-blue">{feature.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
