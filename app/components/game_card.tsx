import { MoveUpRight } from "lucide-react";

type ProfileCardProperties = {
  game: string;
  pp?: string;
  rank?: string;
  link?: string;
  icon?: string;
}

export default function GameCard({ game, pp, rank, link, icon }: ProfileCardProperties) {
  return (
    <div className="bg-gray-100 shadow-[inset_0px_0px_20px_0px_rgba(0,0,0,0.1)] hover:shadow-[rgba(0,0,0,0.15)] transition-all duration-100 px-[5dvw] sm:px-[2dvw] py-[2dvh] rounded-xl flex flex-row">
      <div className="flex flex-row gap-3">
        {icon && <img src={icon} alt="" className="mb-auto w-8 rounded-md" loading="lazy" />}
        {!icon && <img src={"no_image_available.jpg"} alt="" className="mb-auto w-8 rounded-md" />}
        <div className="flex flex-col">
          {pp && <h3 className="text-2xl">{game} <span className="text-sm">{pp}</span></h3>}
          {!pp && <h3 className="text-2xl">{game}</h3>}
          {rank && <p className="text-gray-500 font-medium text-sm">Global Rank #{rank}</p>}
        </div>
      </div>
      <div className="my-auto ml-auto">
        {link && (
          <a className="cursor-pointer bg-gray-300 rounded-full p-1.5 inline-flex items-center justify-center" href={link} target="_blank" title="Link">
            <MoveUpRight size={20} />
          </a>
        )}
      </div>
    </div>
  )
}
