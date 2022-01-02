import { data } from "../data";

export default function Articles() {
  return (
    <div className="bg-light-grayish-blue  my-14 md:my-0 py-12 px-6">
      {/* heading text */}
      <div className="space-y-6 mb-8 text-center md:text-left">
        <h1 className="text-dark-blue text-4xl">
          {data.latestArticles.headingText}
        </h1>
      </div>
      {/* Articles */}
      <div className="flex flex-col md:flex-row md:gap-x-6 md:flex-wrap lg:flex-nowrap md:justify-center">
        {data.latestArticles.articles.map((article) => (
          <div
            key={article.title}
            className="mt-8 space-y-5 md:basis-2/5 lg:basis-auto"
          >
            <img
              src={article.img}
              className="mx-auto md:mx-0 rounded-t-md sm:h-80 md:h-48"
              alt="article img"
            />
            <div className="md:px-3 max-w-sm mx-auto cursor-pointer">
              <h5 className="text-grayish-blue text-xs">{article.author}</h5>
              <h3 className="text-lg text-dark-blue hover:text-lime-green">
                {article.title}
              </h3>
              <p className="text-grayish-blue text-sm">{article.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
