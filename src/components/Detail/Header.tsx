import Poster from "@/assets/poster.jpg"

import { RoundedProgressBar } from "../Elements/RoundedProgressBar"

export const Header = () => {
  return (
    <div
      className="bg-no-repeat bg-cover text-slate-50 "
      style={{ backgroundImage: `url(${Poster})` }}
    >
      <div className="flex backdrop-blur-md p-10">
        <img
          className="rounded-lg max-h-[450px] mr-8"
          src={Poster}
          alt="Movie Poster"
        />
        <div className="flex flex-col justify-center">
          <span className="text-4xl font-bold">Lorem Ipsum</span>
          <span className="mb-8 text-md">Action & Adventure, Drama</span>
          <div className="mb-8 flex items-center">
            <div className="mr-4 w-14 h-1w-14">
              <RoundedProgressBar value={85} />
            </div>
            <span className="font-bold">User Score</span>
          </div>
          <span className="mb-4 italic text-gray-300">
            Lorem Ipsum dolor sit amet.
          </span>
          <span className="mb-4 text-2xl font-bold">Overview</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum velit
            repellendus ratione nisi nihil voluptatum facere ipsa odit, dolores
            deleniti ea necessitatibus incidunt error. Quisquam maxime quae
            excepturi exercitationem cupiditate.
          </span>
        </div>
      </div>
    </div>
  )
}
