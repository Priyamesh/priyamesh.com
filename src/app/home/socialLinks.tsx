import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import Image from "next/image";

export default function SocialLinks() {
  return (
    <ul className="flex items-center space-x-3 pt-5 text-gray-400">
      <li>
        <a
          href="https://www.linkedin.com/in/priyameshgupta/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="w-6 h-6 text-slate-800" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Priyamesh" target="_blank" rel="noreferrer">
          <GitHubIcon className="w-5 h-5 text-slate-800" />
        </a>
      </li>
      <li>
        <a
          href="https://leetcode.com/u/priyamesh28/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/leetcode.svg" alt="Leetcode" width={20} height={20} />
        </a>
      </li>
    </ul>
  );
}
