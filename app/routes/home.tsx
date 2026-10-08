import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "A Personal Website From Sabio" },
    { name: "description", content: "the real, official website for sabio. no uranium included" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="text-center flex flex-col gap-[2.5dvh] justify-center h-dvh *:cursor-pointer *:select-none">
        <h1 className="text-[15vw]/[0.78] h-fit">sabio</h1>
        <p className="text-[1.5vw]">(official)</p>
      </div>
      <div className="text-left flex flex-row gap-6 ml-auto mr-auto">
        <h2 className="text-4xl text-center">Who is bro?</h2>
        <p className="mt-1 w-[35dvw]">
          I'm Sabio (Official, not the doppelgänger), an <del className="decoration-2">un</del>professional full stack web developer, extremely <del>horrible</del>
          &nbsp;good game developer, and a <del>ass</del> awesome modder for <img src="minecraft.png" className="inline h-5 align-text-bottom"/> Minecraft!
        </p>
      </div>
    </main>
  );
}
