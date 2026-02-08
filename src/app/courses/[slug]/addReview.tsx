"use client";
import Button from "@/components/ui/button";
import Textarea from "@/components/ui/textarea";
import { Star } from "@/lib/icons";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type ReviewForm = {
  name: string;
  email: string;
  message: string;
};

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReviewForm>();

  const onSubmit = async () => {
    if (rating === 0) {
      toast.error("Please provide a rating");
      return;
    }

    try {
      const res = await new Promise<{ ok: boolean }>((resolve) => {
        setTimeout(() => {
          resolve({ ok: true }); // simulate API response
        }, 2000);
      });

      if (!res.ok) {
        toast.error("Failed to add comment");
        return;
      }

      toast.success("Comment added successfully");
      reset();
      setRating(0);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit())}
      className="mt-8 rounded-3xl bg-primary p-6"
    >
      <h6 className="mb-5 text-lg leading-7 font-semibold">Write a review</h6>
      <div className="w-full">
        <label
          htmlFor="rating"
          className="mb-1.5 block text-sm leading-5 font-medium tracking-sm text-secondary"
        >
          Rating
        </label>
        <ul className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <li key={star}>
              <button
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-all duration-200"
              >
                <Star
                  className={`size-5 ${
                    star <= (hoveredRating || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-400"
                  } hover:scale-110`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 w-full">
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm leading-5 font-medium tracking-sm text-secondary"
        >
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Enter your message here..."
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
          dataState={errors.message ? "error" : "default"}
        />
        {errors.message && (
          <span className="text-xs text-[#FB3748]">
            {errors.message.message}
          </span>
        )}
      </div>
      <Button disabled={isSubmitting} className="mt-6">
        Submit your review
      </Button>
    </form>
  );
};

export default AddReview;
