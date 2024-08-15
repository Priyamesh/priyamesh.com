import Education from "./home/education";
import SocialLinks from "./home/socialLinks";
import Skills from "./home/skills";

export default function Home() {
  return (
    <>
      <section className="space-y-2">
        <h1 className="text-xl font-bold text-gray-700">
          hey, I&apos;m Priyamesh 👋
        </h1>
        <h4 className="text-lg text-gray-600"></h4>
        <p className="text-slate-600">
          Full-stack developer from India, currently working at{" "}
          <a
            href="https://www.mantys.io/"
            className="text-yellow-900 underline"
          >
            Mantys YC(23).
          </a>{" "}
          I love building tech and sharing my learning with community.
        </p>
        <SocialLinks />
      </section>
      <div className="my-4 border-b"></div>
      <Skills />
      <div className="my-4 border-b"></div>
      <Education />
      <div className="my-4 border-b"></div>
      {/* <Projects /> */}
      {/* <Subscribe /> */}
    </>
  );
}
