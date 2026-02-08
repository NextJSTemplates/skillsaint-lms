"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AchievmentCount = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <h2
      ref={ref}
      className="text-[clamp(2.25rem,1.5652rem+3.0435vw,4rem)] leading-[1.28] font-semibold tracking-[-1.12px] text-purple-500"
    >
      {inView && <CountUp end={value} suffix={suffix} />}
    </h2>
  );
};

export default AchievmentCount;
