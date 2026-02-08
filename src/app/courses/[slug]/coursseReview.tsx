"use client";
import Avatar from "@/components/ui/avatar";
import { StarDisplay } from "@/components/ui/starDisplay";
import { Star } from "@/lib/icons";
import { cn, formatDate } from "@/lib/utils";

const reviews = [
  {
    _id: "1",
    reviewerName: "John Doe",
    reviewerImage: "/images/courses/avatar-2.png",
    rating: 5,
    review:
      "This course was amazing! I learned so much about UI/UX design and the instructor was fantastic.",
    _createdAt: "2024-05-01T12:00:00Z",
  },
  {
    _id: "2",
    reviewerName: "Jane Smith",
    reviewerImage: "/images/courses/avatar-3.png",
    rating: 4,
    review:
      "Great course with lots of useful information. I would have liked more real-world examples, but overall it was very helpful.",
    _createdAt: "2024-05-10T15:30:00Z",
  },
];
const CoursseReview = () => {
  return (
    <div>
      <div className="mb-7 flex items-center justify-between rounded-2xl bg-primary p-6">
        <h5 className="text-xl font-medium sm:text-2xl sm:leading-8">Review</h5>
        <div className="flex items-center gap-x-2">
          <span className="text-yellow-400">
            <Star />
          </span>
          <h6 className="text-lg leading-7.5 font-medium sm:text-xl">4.5</h6>
          <h6 className="text-lg leading-7.5 font-medium sm:text-xl">Rating</h6>
        </div>
      </div>
      {/* review display */}
      <div>
        {reviews.map(
          (
            { _id, review, _createdAt, rating, reviewerName, reviewerImage },
            index,
          ) => {
            const isLast = index === reviews.length - 1;
            return (
              <div
                key={_id}
                className={cn(
                  "mb-6 border-b border-b-gray-200 pb-6",
                  isLast && "mb-0 border-none pb-0",
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div>
                      <Avatar
                        img={reviewerImage}
                        name={reviewerName}
                        className="h-14 w-14 bg-primary"
                      />
                    </div>
                    <div>
                      <p className="mb-1 leading-6 font-semibold tracking-base">
                        {reviewerName}
                      </p>
                      <small className="text-sm leading-5 tracking-sm text-secondary">
                        {formatDate(_createdAt)}
                      </small>
                    </div>
                  </div>
                  <StarDisplay value={rating} />
                </div>
                <p className="mt-5 leading-6 tracking-base text-secondary">
                  {review}
                </p>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default CoursseReview;
