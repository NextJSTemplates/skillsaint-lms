import { PlayOutline } from "@/lib/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  {
    _key: "1",
    sectionTitle: "Design Fundamentals",
    lessons:[
      {
        _key: "1",
        title: "Introduction to UI/UX Design",
        duration: 15,
      },
      {
        _key: "2",
        title: "Design Thinking Process",
        duration: 30,
      },
      {
        _key: "3",
        title: "User Research Methods",
        duration: 45,
      }
    ]
  },
  {
    _key: "2",
    sectionTitle: "Design Tools and Techniques",
    lessons:[
      {
        _key: "1",
        title: "Introduction to UI/UX Design",
        duration: 15,
      },
      {
        _key: "2",
        title: "Design Thinking Process",
        duration: 30,
      },
      {
        _key: "3",
        title: "User Research Methods",
        duration: 45,
      }
    ]
  },
  {
    _key: "3",
    sectionTitle: "Wireframing & Prototyping",
    lessons:[
      {
        _key: "1",
        title: "Introduction to UI/UX Design",
        duration: 15,
      },
      {
        _key: "2",
        title: "Design Thinking Process",
        duration: 30,
      },
      {
        _key: "3",
        title: "User Research Methods",
        duration: 45,
      }
    ]
  },
]
const CourseContent = () => {
  return (
    <div className="rounded-3xl bg-primary p-6">
      <h4 className="font-mulish text-xl font-bold sm:text-2xl sm:leading-8">
        Course Content
      </h4>
      <div className="mt-5">
        <Accordion
          collapsible
          defaultValue={data[0]._key.toString()}
          className="space-y-3"
        >
          {data.map(({ _key, lessons, sectionTitle }) => (
            <AccordionItem key={_key} value={_key.toString()}>
              <AccordionTrigger className="items-center pt-5 pb-5 [&_svg]:size-4">
                <span className="flex w-full flex-col items-start justify-between gap-y-0.5 sm:flex-row sm:items-center">
                  <span className="tracking-[ 0.56px] text-sm leading-5 font-medium">
                    {sectionTitle}
                  </span>
                  <span className="text-sm leading-5 font-normal tracking-sm text-secondary">
                    {lessons.length} lessons{" "}
                    <span className="text-gray-300">•</span>{" "}
                    {(() => {
                      const totalMinutes =
                        lessons?.reduce((total, lesson) => {
                          return total + (lesson.duration || 0);
                        }, 0) || 0;

                      const hours = Math.floor(totalMinutes / 60);
                      const mins = totalMinutes % 60;
                      return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
                    })()}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="p-5">
                {lessons.length ? (
                  <ul className="mt-2 rounded-2xl bg-primary">
                    {lessons.map(({ _key, title }) => (
                      <li
                        key={_key}
                        className="flex items-center gap-x-2 border-b border-dashed border-b-gray-200 pt-4 pb-4 text-secondary first:pt-0 last:border-0 last:pb-0"
                      >
                        <span className="flex items-center justify-center">
                          <PlayOutline className="size-4.5" />
                        </span>
                        <span className="text-sm leading-5 font-medium tracking-sm">
                          {title}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="pb-5">No module available</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default CourseContent;
