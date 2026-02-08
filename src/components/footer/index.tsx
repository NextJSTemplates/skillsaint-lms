import {
  ArrowRight,
  Facebook,
  Instagram,
  LinkedinFill,
  LogoWhite,
  Twitter,
} from "@/lib/icons";
import Input from "../ui/input";
import Link from "next/link";
import Copyright from "./copyright";
import Image from "next/image";

const footerData = [
  {
    title: "Quick Link",
    links: [
      { text: "Home", url: "#" },
      { text: "All Courses", url: "#" },
      { text: "Categories", url: "#" },
      { text: "Contact", url: "#" },
      { text: "FAQ's", url: "#" },
    ],
  },
  {
    title: "Categories",
    links: [
      { text: "Web Development", url: "#" },
      { text: "UI/UX Design", url: "#" },
      { text: "Digital Marketing", url: "#" },
      { text: "Artificial Intelligence", url: "#" },
      { text: "Cyber Security", url: "#" },
    ],
  },
  {
    title: "Help & Legal",
    links: [
      { text: "Help Center", url: "#" },
      { text: "Terms & Conditions", url: "#" },
      { text: "Privacy Policy", url: "#" },
      { text: "Refund Policy", url: "#" },
      { text: "Affiliate Program", url: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden bg-gray-950">
      <Image
        width={1440}
        height={652}
        src={"/images/footer/bg-img.svg"}
        alt="img"
        sizes="100vw"
        loading="eager"
        className="absolute top-[119.438px] -left-[578px] z-[-1] h-full w-full"
      />
      <div className="relative overflow-hidden pt-11 pb-9 sm:pt-14 lg:pt-20">
        <div className="absolute bottom-[-321px] left-1/2 h-[390px] w-[585px] -translate-x-1/2 rounded-[585.5px] bg-purple-400 opacity-50 blur-[102.00930786132812px]"></div>
        {/* Subscribe */}
        <div className="container">
          <div className="relative z-10 flex flex-col justify-between gap-x-10 gap-y-8 md:flex-row md:items-end">
            <div className="max-w-[442px]">
              <h4 className="mb-3 text-2xl leading-8 font-medium text-primary">
                Subscribe to our newsletter
              </h4>
              <small className="mt-3 text-sm leading-5 tracking-sm text-[rgba(255,255,255,0.70)]">
                Stay connected with Skillsaint — receive curated learning
                resources, platform updates, and career-building tips every
                week.
              </small>
            </div>
            <div className="w-full max-w-[400px]">
              <form className="relative flex items-center">
                <Input
                  required
                  placeholder="hello@skillsaint.com"
                  className="h-11 w-full border-secondary bg-gray-900 pr-15 text-primary placeholder:text-gray-500 sm:h-12"
                />

                <button className="absolute right-1 flex h-9 w-9 items-center justify-center rounded-full bg-purple-500 text-primary transition-all duration-500 hover:bg-purple-600">
                  <ArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-11 sm:py-14 lg:py-20">
        {/* logo and link */}
        <div className="flex flex-col justify-between gap-x-12 gap-y-10 lg:flex-row">
          <div className="max-w-[297px] flex-1">
            <Link href={"/"} className="text-primary">
              <LogoWhite className="max-sm:w-27" />
            </Link>
            <p className="mt-4 text-sm leading-5 tracking-sm text-gray-400">
              Empowering learners worldwide to master new skills and advance
              their careers through high-quality online education.
            </p>
            <ul className="mt-10 flex items-center gap-2">
              <li>
                <Link
                  href={"#"}
                  className="flex size-9 items-center justify-center rounded-full bg-gray-800 text-gray-500 transition-all duration-500 hover:bg-purple-500 hover:text-primary"
                >
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="flex size-9 items-center justify-center rounded-full bg-gray-800 text-gray-500 transition-all duration-500 hover:bg-purple-500 hover:text-primary"
                >
                  <Twitter />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="flex size-9 items-center justify-center rounded-full bg-gray-800 text-gray-500 transition-all duration-500 hover:bg-purple-500 hover:text-primary"
                >
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="flex size-9 items-center justify-center rounded-full bg-gray-800 text-gray-500 transition-all duration-500 hover:bg-purple-500 hover:text-primary"
                >
                  <LinkedinFill />
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid max-w-[712px] flex-1 gap-x-20 gap-y-10 sm:grid-cols-3">
            {footerData.map(({ links, title }, index) => (
              <div key={index}>
                <h6 className="leading-7 font-medium tracking-base text-primary">
                  {title}
                </h6>
                <ul className="mt-5 space-y-3">
                  {links.map(({ text, url }, index) => (
                    <li key={index} className="leading-5">
                      <Link
                        href={url}
                        className="text-sm leading-5 tracking-sm text-gray-400 transition-all duration-500 hover:text-purple-500"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Copyright />
    </footer>
  );
};

export default Footer;
