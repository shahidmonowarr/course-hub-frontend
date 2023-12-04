import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  const gmailHandler = () => {
    window.open(
      "mailto:" +
        "shahidmonowar54@gmail.com" +
        "?subject=" +
        " " +
        "&body=" +
        " ",
      "_self"
    );
  };
  return (
    <div className="flex px-6 py-8 text-sm text-gray-200 bg-gray-800 lg:text-base">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 lg:space-x-8">
            <Link href="/">
              <span className="cursor-pointer hover:text-white">Home</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="w-5 my-auto md:w-6">
              <Image
                draggable={false}
                width={25}
                height={25}
                src="/img/social/email.svg"
                objectFit="contain"
                className="cursor-pointer"
                alt="email"
                onClick={gmailHandler}
              />
            </div>
            <div className="w-5 my-auto md:w-6">
              <Image
                draggable={false}
                width={25}
                height={25}
                src="/img/social/linkedin.svg"
                objectFit="contain"
                className="cursor-pointer"
                alt="linkedin"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/shahid-monowar-/");
                }}
              />
            </div>
            <div className="w-5 my-auto md:w-6">
              <Image
                draggable={false}
                width={25}
                height={25}
                src="/img/social/github.svg"
                objectFit="contain"
                className="cursor-pointer"
                alt="github"
                onClick={() => window.open("https://github.com/shahidmonowarr")}
              />
            </div>
          </div>
        </div>
        <p className="flex flex-wrap items-center justify-center mt-6 text-center text-gray-200">
          Made with <HeartIcon className="w-5 mx-2 text-red-500" /> by
          <span className="ml-2 text-white hover:underline">
            <Link href="">Md Shahid Monowar</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
