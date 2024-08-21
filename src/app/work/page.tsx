import React, { Fragment } from "react";

const data = [
  {
    title: "Mantys - FP&A SaaS Tool",
    description: "Full Stack engineer",
    duration: "Jan 2024 - Present",
    link: "https://mantys.io",
    content: {
      summary:
        "Mantys is a modern FP&A SaaS application that helps finance teams manage their budgets, forecasts, and actuals.",
      JobRole: [
        "Engineered drag-and-drop Reports builder (Dashboard using metric from UI with all types of charts and tables). ",
        "Spearheaded Customer360 (Module to collect data from CRM, Billing Software and Contracts and create master data using Fuzzy logic and Document Parsing).",
        "Revamped the UI, data transformation pipelines, developed CI/CD pipelines from scratch using React + tailwind, Cube dev and Github actions.",
        "Developed Document Parser with multi-support LLM(aws text-extract, google document-ai, llamaParse) and python.",
        "Integrated AI with the RAG and created agents and automation workflows using AWS Bedrock.",
        "Managed a team of 3 developers ensuring code quality, and facilitating effective communication.",
      ],

      technologies:
        "React, Next.js, Tailwind CSS, Node.js, Express, PostgreSQL, AWS, Docker and Cube.dev",
    },
  },
  {
    title: "AlgoScale - AI Consulting and Data Analytics Solutions",
    description: "Python Developer",
    duration: "Apr 2023 - Aug 2023",
    link: "https://algoscale.com/",
    content: {
      summary:
        "Algoscale is a top-notch AI-focused digital engineering firm motivated by a drive to explore and bring about transformative possibilities in the core of commerce",
      JobRole: [
        "Developed a Job scrapper using scrappy and azure functions.",
        "Implemented Azure functions for creating event-driven functions with dockers",
        "Assisted team with Python scripting for a variety of problems.",
      ],
      technologies: "Python, Azure, Docker",
    },
  },
  {
    title: "Analytics Vidhya - Building Next-Generation AI Professionals",
    description: "Software Development Engineer 1",
    duration: "May 2022 - Mar 2023",
    link: "https://www.analyticsvidhya.com/",
    content: {
      summary:
        "Analytics Vidhya is the leading community of Analytics, Data Science and AI professionals. We are building the next generation of AI professionals.",
      JobRole: [
        "Developed a centralized lead-capturing system from various platforms to the external CRM portal.",
        "Created low-level design and APIs for user profile service and various dynamic landing pages.",
        "Upgraded conventional login mechanism to popup login including social logins that resulting in 52% rise in signups.",
      ],
      technologies: "Django, Python",
    },
  },
  {
    title: "Accenture: India- Let There Be Change",
    description: "Application Development Associate",
    duration: "Feb 2021 - Apr 2022",
    link: "https://www.analyticsvidhya.com/",
    content: {
      summary:
        "Accenture plc is an Irish-American professional services company headquartered in Dublin, Ireland, that specializes in information technology (IT) services and consulting. A Fortune Global 500 company, it reported revenues of $64.1 billion in 2023.",
      JobRole: [
        "Contributed in Automating web application resulting in reduction in time of testing a test case from 8 to 3 min.",
        "Automated 60+ forms which is 25% of total forms available in web application.",
        "Carried out automation regression testing of 1100+ test cases and failure analysis of required test cases.",
      ],
      technologies: "Java, Selenium, SQL",
    },
  },
];

export default function page() {
  return (
    <>
      <h1 className="text-3xl text-center">my work</h1>
      {data.map((item, index) => (
        <Fragment key={index}>
          <div className="mb-4 border-0 shadow-none m-0">
            <div className="flex flex-col space-y-1.5 py-6">
              <h3 className="text-xl font-semibold leading-none tracking-tight">
                <a href={item.link}>{item.title}</a>
              </h3>
              <div className="flex justify-between text-sm text-muted-foreground">
                <p>{item.description}</p>
                <p className="text-xs text-slate-600">{item.duration}</p>
              </div>
            </div>
            <div className="py-6 pt-0 space-y-4">
              <p className="text-slate-600">{item.content.summary}</p>
              <ul className="list-disc pl-6 space-y-2">
                {item.content.JobRole.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
              <p className="space-x-2 text-gray-700">
                <span>Technologies:</span>
                <span>{item.content.technologies}</span>
              </p>
            </div>
          </div>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        </Fragment>
      ))}
    </>
  );
}
