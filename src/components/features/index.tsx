import SectionTitle from "../sectionTitle";
import Image from "next/image";
import { featuresData } from "./featuresData";

const Features = () => {
  return (
    <section className="bg-gray-950 py-16 sm:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          className="flex flex-col items-center text-center"
          titleClassName="text-primary"
          descriptionClass="text-gray-400"
          subTitleClass="btn-gradient-border-black text-gray-400"
          subTitle="Why Skillsaint "
          description="Experience the difference with a platform engineered to help you actually learn, apply, and succeed."
        >
          The Smarter Way to Learn Tech
        </SectionTitle>
        <div className="grid gap-6 pt-11 sm:grid-cols-2 sm:pt-14 lg:grid-cols-3 lg:pt-16">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="rounded-3xl border border-[#202020] bg-[linear-gradient(180deg,_#222530_0%,_#131422_100%)] px-4 pt-6 pb-4"
            >
              <div
                style={{
                  background:
                    "linear-gradient(var(--gray-700), var(--gray-800)) padding-box, linear-gradient(to bottom, var(--secondary), var(--gray-800)) border-box",
                  borderRadius: "999px",
                  border: "0.75px solid transparent",
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full"
              >
                {feature.icon}
              </div>
              <div className="pt-8">
                <h5 className="text-xl leading-7.5 font-semibold text-primary">
                  {feature.title}
                </h5>
                <p className="mt-2 tracking-base text-gray-400">
                  {feature.description}
                </p>
              </div>
              <div className="pt-8">
                <div className="rounded-2xl border-4 border-[#2A2C36]">
                  <Image
                    width={364}
                    height={242}
                    sizes="100vw"
                    src={feature.thumbnail}
                    alt="img"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
