import { GitHubIcon, TwitterIcon, YoutubeIcon } from "@/components/icons";
import Education from "./home/education";

export default function Home() {
  return (
    <>
      <section className="space-y-2">
        <h1 className="text-xl font-bold text-gray-700">
          hey, I&apos;m Priyamesh 👋
        </h1>
        <h4 className="text-lg text-gray-600"></h4>
        <p className="text-slate-600">
          Ingenious and determined{" "}
          <span className="text-slate-900">
            Full-Stack Software Engineer with 3+ years
          </span>{" "}
          of experience building scalable applications at fast-paced startups,
          collaborating with cross-functional teams, mentoring SWEs. Playing a
          pivotal role as a backend developer at{" "}
          <a
            href="https://www.analyticsvidhya.com/"
            className="text-yellow-900 underline"
          >
            Analytics Vidhya
          </a>
          , where I extended and maintained the Centralized CRM and Login
          service. Currently, I am building{" "}
          <a
            href="https://www.mantys.io/"
            className="text-yellow-900 underline"
          >
            Mantys YC(23)
          </a>
          .
        </p>
        <SocialLinks />
      </section>
      <div className="my-4 border-b"></div>
      <Education />
      <div className="my-4 border-b"></div>
      {/* <Projects /> */}
      {/* <Subscribe /> */}
    </>
  );
}

function SocialLinks() {
  return (
    <ul className="flex items-center space-x-3 pt-5 text-gray-400">
      <li>
        <a href="https://github.com/Priyamesh" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a href="" target="_blank" rel="noreferrer">
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a href="" target="_blank" rel="noreferrer">
          <YoutubeIcon />
        </a>
      </li>
    </ul>
  );
}
