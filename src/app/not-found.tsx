import Button from "@/components/ui/button";
import ButtonArrow from "@/components/ui/buttonArrow";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <main>
      <section className="bg-gray-50 pt-11 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28 min-h-screen">
        <div className="container">
          <div className="mx-auto mb-6 max-w-142">
            <Image
              width={568}
              height={502}
              sizes="100vw"
              src={"/images/not-found.png"}
              alt="img"
            />
          </div>
          <div className="text-center">
            <h2
              className={
                "text-[clamp(2rem,1.6087rem+1.7391vw,3rem)] leading-tight font-medium tracking-[-0.96px]"
              }
            >
              Page Not Found
            </h2>
            <p className="mt-3 block text-sm leading-5 font-medium tracking-sm text-secondary">
              The page you’re trying to reach isn’t available right now.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 py-1.5 pr-6 pl-1.5 max-sm:w-full"
            >
              <Link href={"/"}>
                <span className="rotate-180">
                  <ButtonArrow />
                </span>
                <span className="w-full text-center">Back to Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
