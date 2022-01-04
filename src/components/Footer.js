import Logo from "./Logo";
import ActionButton from "./ActionButton";

import { data } from "../data";

export default function Footer() {
  return (
    <div className="bg-dark-blue p-6 ">
      <div className="container mx-auto space-y-5 flex flex-col md:flex-row items-center md:items-start justify-between">
        <div>
          <Logo footer />
          <div className="flex mt-6">
            {data.footer.socialIcons.map((icon) => (
              <a key={icon.alt} href="#" className="mr-3">
                <img src={icon.img} alt={icon.alt} />
              </a>
            ))}
          </div>
        </div>
        <div className="text-white flex flex-col">
          {data.footer.links.map((link) => (
            <a key={link.text} href={link.url} className="mb-3">
              {link.text}
            </a>
          ))}
        </div>
        <div className="text-center">
          <ActionButton />
          <p className="text-grayish-blue mt-6">{data.footer.copyright}</p>
        </div>
      </div>
    </div>
  );
}
