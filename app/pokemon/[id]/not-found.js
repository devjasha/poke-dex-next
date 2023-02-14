import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <iframe
        src="https://giphy.com/embed/SsjyaYH2gkNCE"
        width="480"
        height="360"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p> Whoop's it seems there is no entry for this Pokemon</p>
      <Link
        className="py-3 px-6 w-auto my-10 rounded-md text-white dark:text-black bg-black dark:bg-white flex items-center"
        href="/"
      >
        <AiOutlineArrowLeft className="mr-3" /> Go back!
      </Link>
    </div>
  );
};

export default NotFound;
