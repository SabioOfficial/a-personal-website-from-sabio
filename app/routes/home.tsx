import type { Route } from "./+types/home";
import PopHorizontalLine from "~/components/horizontal_line";

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
      <div className="flex flex-col gap-[6dvh] [&>div]:text-left [&>div]:flex [&>div]:flex-row [&>div]:gap-6 *:ml-auto *:mr-auto *:w-[70dvw]">
        <div>
          <h2 className="text-4xl whitespace-nowrap">Who is bro?</h2>
          <div className="flex flex-col mt-1 grow">
            <p>
              I'm Sabio (Official, not the doppelgänger), an <del className="decoration-2">un</del>professional full stack web developer, extremely&nbsp;
              <del>horrible</del> good game developer, and a <del>ass</del> awesome modder for&nbsp;
              <img src="minecraft.png" className="inline h-5 align-text-bottom" /> Minecraft!<br />
              <br />I mainly code in <img src="javascript.png" className="inline h-5 align-text-bottom" /> JavaScript,&nbsp;
              <img src="java.png" className="inline h-5 align-text-bottom" /> Java,&nbsp;
              <img src="typescript.webp" className="inline h-5 align-text-bottom" /> TypeScript,&nbsp;
              <img src="godot.png" className="inline h-5 align-text-bottom" /> GDScript. I rarely code in&nbsp;
              <img src="python.webp" className="inline h-5 align-text-bottom" /> Python. I formerly used&nbsp;
              <img src="roblox_studio.webp" className="inline h-5 align-text-bottom" /> Roblox Studio and&nbsp;
              <img src="vscode.webp" className="inline h-5 align-text-bottom" /> VSCode. I have since switched to&nbsp;
              <img src="intellij_idea.png" className="inline h-5 align-text-bottom" /> IntelliJ IDEA for Minecraft Modding and&nbsp;
              <img src="zed.png" className="inline h-5 align-text-bottom" /> Zed for my primary IDE.
              I am able to use&nbsp;
              <img src="figma.png" className="inline h-5 align-text-bottom" /> Figma for UI design with ease and&nbsp;
              <img src="godot.png" className="inline h-5 align-text-bottom" /> Godot for game development somewhat well.
            </p>
          </div>
        </div>
        <PopHorizontalLine />
        <div className="text-right">
          <div className="flex flex-col mt-1 w-[50dvw]">
            <p>
              I spend all day either gaming or coding, you will NOT be finding me outs*de. I mainly play&nbsp;
              <img src="cs2.jpg" className="inline h-5 align-text-bottom" /> Counter-Strike 2 (all hail Lord GabeN),&nbsp;
              <img src="osu.png" className="inline h-5 align-text-bottom" /> osu (mostly osu!mania),&nbsp;
              <img src="palworld.png" className="inline h-5 align-text-bottom" /> Palworld (enslaving pokemon!),&nbsp;
              <img src="ark.png" className="inline h-5 align-text-bottom" /> ARK: Survival Evolved (same amount of bugs as all my projects!),&nbsp;
              <img src="minecraft.png" className="inline h-5 align-text-bottom" /> Minecraft (obviously, as a modder), and more!<br />
              <br /> I also like working on websites (like this one!) and web extensions (check out my modular, quality of life extension&nbsp;
              <img src="exterstellar.png" className="inline h-5 align-text-bottom" /> Exterstellar!). Doomscrolling is my passion.
            </p>
          </div>
          <h2 className="text-4xl whitespace-nowrap">Hobbies & Shi</h2>
        </div>
        <PopHorizontalLine />
        <div className="justify-center">
          <h2 className="text-center text-4xl whitespace-nowrap">Projects</h2>
        </div>
      </div>
    </main>
  );
}
