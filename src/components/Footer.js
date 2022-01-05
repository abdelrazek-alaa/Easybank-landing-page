import Logo from "./Logo";
import ActionButton from "./ActionButton";
import { data } from "../data";

export default function Footer() {
  return (
    <footer className="bg-dark-blue px-6 py-11 ">
      <div className="container mx-auto space-y-5 flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="flex flex-col gap-y-4 md:flex-row gap-x-28 xl:gap-x-40 items-center md:items-start">
          <div>
            <Logo footer />
            <div className="flex mt-6 md:mt-10">
              {data.footer.socialIcons.map((icon) => (
                <a
                  key={icon.alt}
                  href="https://github.com/abdelrazek-alaa"
                  className="mr-3"
                >
                  <img src={icon.img} alt={icon.alt} />
                </a>
              ))}
            </div>
          </div>
          <div className="text-white flex flex-col md:h-32 flex-wrap gap-x-16 xl:gap-x-36">
            {data.footer.links.map((link) => (
              <a key={link.text} href={link.url} className="mb-3">
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center">
          <ActionButton />
          <p className="text-grayish-blue mt-6">{data.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
