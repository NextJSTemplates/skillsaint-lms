import React, { ReactNode } from "react";
import SectionTitle from "../sectionTitle";

type PropsType = {
  children: ReactNode;
  subTitle: string;
  description: string;
};
const PageHeader = ({ children, subTitle, description }: PropsType) => {
  return (
    <section
      className="overflow-hidden bg-contain bg-bottom bg-no-repeat pt-20 pb-17"
      style={{
        backgroundImage: `url('/images/page-header/page-header-bg.png')`,
      }}
    >
      <div className="container">
        <SectionTitle
          className="flex flex-col items-center text-center"
          subTitle={subTitle}
          description={description}
          descriptionClass="max-w-[570px]"
        >
          {children}
        </SectionTitle>
      </div>
    </section>
  );
};

export default PageHeader;
