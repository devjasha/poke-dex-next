import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";

const Contact = () => {
  return (
    <div className="w-full max-w-7xl min-h-screen flex items-center justify-between mx-auto px-9">
      <div>
        <h1 className="text-7xl">Contact</h1>
        <div className="mt-7">
          <div className="flex items-center mt-2">
            <CgWebsite className="w-auto h-5 mr-3" />
            <a href="https://jasha.vercel.app" className="text-xl">
              Portfolio
            </a>
          </div>
          <div className="flex items-center mt-2">
            <AiOutlineMail className="w-auto h-5 mr-3" />
            <a href="mailto:jasha@chec.de" className="text-xl">
              jasha@chec.de
            </a>
          </div>
          <div className="flex items-center mt-2">
            <FiGithub className="w-auto h-5 mr-3" />
            <a href="https://github.com/devjasha" className="text-xl">
              Github
            </a>
          </div>
          <div className="flex items-center mt-2">
            <AiOutlineInstagram className="w-auto h-5 mr-3" />
            <a href="https://www.instagram.com/jasha_dev/" className="text-xl">
              Instagram
            </a>
          </div>
          <div className="flex items-center mt-2">
            <FiTwitter className="w-auto h-5 mr-3" />
            <a href="https://twitter.com/ChecJasha" className="text-xl">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
