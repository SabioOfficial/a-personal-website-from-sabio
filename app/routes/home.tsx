import type { Route } from "./+types/home";
import PopHorizontalLine from "~/components/horizontal_line";
import { MoveUpRight } from 'lucide-react';
import ProjectCard from "~/components/project_card";
import ProfileCard from "~/components/profile_card";

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
      <div className="flex flex-col gap-[6dvh] [&>div]:text-left [&>div]:flex [&>div]:gap-6 *:ml-auto *:mr-auto *:w-[70dvw]">
        <PopHorizontalLine />
        <div className="flex-row px-[2dvw]">
          <h2 className="text-[2.3dvw] whitespace-nowrap">Who is bro?</h2>
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
        <div className="flex-row text-right justify-end px-[2dvw]">
          <div className="flex flex-col mt-1 grow">
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
          <h2 className="text-[2.3dvw] whitespace-nowrap">Hobbies & Shi</h2>
        </div>
        <PopHorizontalLine />
        <div className="flex-col justify-center px-[2dvw]">
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-center text-[2.3dvw] whitespace-nowrap">Projects</h2>
            <p>Here's the list of all the cool projects i've worked on :)</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <ProjectCard
              title="Exterstellar"
              description="A plugin based quality-of-life browser extension for Stardance."
              authorNote="A spiritual successor to my first initial attempt at a modular browser extension, Macondo+."
              github="https://github.com/Team-Exterstellar/Exterstellar"
              demo="https://exterstellar.space/"
              icon="exterstellar.png"
              role="Director + Lead Developer"
            />
            <ProjectCard
              title="A Personal Website From Sabio"
              description="the real, official website for sabio. no uranium included"
              authorNote="You're on it right now!"
              github="https://github.com/SabioOfficial/a-personal-website-from-sabio"
              demo="https://sabiothe.dev/"
              wip={true}
            />
            <ProjectCard
              title="More Weapons (Polymer)"
              description="A fully server-side mod that adds new & unique weapons + combat related content to the game!"
              authorNote="First time working with Polymer + making more than a YouTube short about it!"
              github="https://github.com/SabioOfficial/more-weapons"
              wip={true}
              releaseDate="2026"
            />
            <ProjectCard
              title="Wands of Combat"
              description="A sick wand mod with a mana system!"
              authorNote="Receiving content updates on a non-regular basis"
              github="https://github.com/SabioOfficial/wandsofcombat"
              demo="https://modrinth.com/mod/wandsofcombat"
              icon="https://cdn.modrinth.com/data/PfI69WTw/44930ee8094083fddcde2065b4e1dc8e0ad24375.gif"
            />
            <ProjectCard
              title="Clatter"
              description="A sick wand mod with a mana system!"
              authorNote="A communication platform for workspaces made by a small team, for small teams."
              github="https://github.com/Quntem/Clatter"
              demo="https://beta.clatter.work/"
              icon="https://raw.githubusercontent.com/Quntem/Clatter/refs/heads/main/app/public/favicon.png"
              role="Co-Founder + Frontend Developer"
            />
            <ProjectCard
              title="Abyssium"
              description="Making The End worthwhile. That’s Abyssium."
              authorNote="My first Minecraft mod. It's peak."
              github="https://github.com/SabioOfficial/abyssium"
              demo="https://modrinth.com/mod/abyssium"
              icon="https://cdn.modrinth.com/data/nDxAwnzY/c593e5989fc4ccc99d88e9893c3ecaa30ce67e03_96.webp"
            />
            <ProjectCard
              title="Quirky Chess Engine"
              description="A chess engine with toggleable rules & modded chess rules."
              github="https://github.com/SabioOfficial/Quirky-Chess-Engine"
              demo="https://qce.archived.sabiothe.dev/"
              icon="https://qce.archived.sabiothe.dev/public/Logo.png"
            />
            <ProjectCard
              title="Maximine"
              description="maximize your dopamine levels with this idler game"
              authorNote="'Do you like dopamine?' -Maximine Trailer"
              github="https://github.com/SabioOfficial/maximine"
              demo="https://sabioofficial.itch.io/maximine"
              icon="https://img.itch.zone/aW1nLzI4NDc1MTE5LnBuZw==/32x32%23/3uyd75.png"
            />
            <ProjectCard
              title="Modirena"
              description="A server-side mod with an arena with a special twist: you can choose between 3 effects that stack every round."
              authorNote="This mod was sponsored by my friend's building skills!"
              github="https://github.com/SabioOfficial/modirena"
            />
            <ProjectCard
              title="Macondo+"
              description="Macondo+ is a QoL-focused browser extension that improves the Macondo website."
              authorNote="My first time making a module based browser extension."
              github="https://github.com/SabioOfficial/MacondoPlus"
              demo="https://macondoplus.sabiothe.dev/"
              icon="macondo_plus.png"
            />
            <ProjectCard
              title="Voxl"
              description="A plugin based quality of life browser extension for Pixl."
              authorNote="On indefinite development pause."
              github="https://github.com/SabioOfficial/voxl"
              icon="https://github.com/SabioOfficial/voxl/raw/refs/heads/main/docs/public/favicon.ico"
              wip={true}
            />
            <ProjectCard
              title="XtensionAPI"
              description="An API that allows browser extensions to easily have a plugin system."
              authorNote="On indefinite development pause."
              github="https://github.com/SabioOfficial/XtensionAPI"
              wip={true}
            />
          </div>
        </div>
        <PopHorizontalLine />
        <div className="flex-row justify-start px-[2dvw]">
          <div className="flex flex-col gap-2 w-1/3">
            <h2 className="text-[2.3dvw] whitespace-nowrap">Profiles</h2>
            <p>Here's the list of all the profiles I have, gaming & socials included!</p>
          </div>
          <div className="flex flex-col gap-2 grow">
            <ProfileCard
              platform="YouTube"
              handle="@sabioofficiall"
              authorNote="tuff sigma youtube"
              link="https://www.youtube.com/@sabioofficiall"
              icon="youtube.png"
            />
            <ProfileCard
              platform="Steam"
              handle="ID SabioOfficial"
              authorNote="im rich & an addicted gambler"
              link="https://steamcommunity.com/id/SabioOfficial/"
              icon="https://a.favicon.im/steamcommunity.com"
            />
            <ProfileCard
              platform="osu"
              handle="@sabioofficial"
              authorNote="ultra tuff rhythm game"
              link="https://osu.ppy.sh/users/38674441"
              icon="osu.png"
            />
            <ProfileCard
              platform="Discord"
              handle="@sabiothedev"
              authorNote="i accept no responsibility for my actions on the group gc"
              icon="https://a.favicon.im/discord.com"
            />
            <ProfileCard
              platform="GitHub"
              handle="@SabioOfficial"
              authorNote="creator of over 60 abandoned/never finished projects!"
              link="https://github.com/SabioOfficial"
              icon="https://a.favicon.im/github.com"
            />
            <ProfileCard
              platform="Last.fm"
              handle="@sabioreal"
              authorNote="i adore hardstyle/happy hardcore/toby fox/jumpstyle/breakcore"
              link="https://www.last.fm/user/sabioreal"
              icon="https://a.favicon.im/last.fm"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
