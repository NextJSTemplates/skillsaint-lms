import React from "react";
import { stats } from "./stats";
import AchievmentCount from "./achievmentCount";
import { cn } from "@/lib/utils";

const OurAchievements = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <div className="container">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ description, id, label, value, suffix }) => (
            <div key={id} className="bg-primary p-4 sm:p-6">
              <AchievmentCount value={value} suffix={suffix} />
              <h5 className="mt-3 text-lg font-medium sm:mt-5 sm:text-xl lg:text-2xl lg:leading-8">
                {label}{" "}
              </h5>
              <p className="mt-2 tracking-base text-secondary sm:mt-3">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
