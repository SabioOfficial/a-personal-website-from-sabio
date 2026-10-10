import { MoveUpRight } from "lucide-react";

type ProfileCardProperties = {
  platform: string;
  handle?: string;
  authorNote?: string;
  link?: string;
  icon?: string;
}

export default function ProfileCard({ platform, handle, authorNote, link, icon }: ProfileCardProperties) {
  return (
    <div className="bg-gray-100 shadow-[inset_0px_0px_20px_0px_rgba(0,0,0,0.1)] hover:shadow-[rgba(0,0,0,0.15)] transition-all duration-100 px-[5dvw] sm:px-[2dvw] py-[2dvh] rounded-xl flex flex-row">
      <div className="flex flex-row gap-3">
        {icon && <img src={icon} alt="" className="mb-auto w-8 rounded-md" loading="lazy" />}
        {!icon && <img src={"no_image_available.jpg"} alt="" className="mb-auto w-8 rounded-md" />}
        <div className="flex flex-col">
          {handle && <h3 className="text-2xl">{platform} <span className="text-sm">{handle}</span></h3>}
          {!handle && <h3 className="text-2xl">{platform}</h3>}
          {authorNote && <p className="text-gray-500 font-medium text-sm">P.S. {authorNote}</p>}
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
