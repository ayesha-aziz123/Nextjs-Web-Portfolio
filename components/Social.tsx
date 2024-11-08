import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/ayesha-aziz123" },
  { icons: <FaLinkedin />, path: "https://www.linkedin.com/notifications/?filter=all" },
  { icons: <FaYoutube />, path: "#" },
  { icons: <FaTwitter />, path: "#" },
];

const Social = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} target="_blank" href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
