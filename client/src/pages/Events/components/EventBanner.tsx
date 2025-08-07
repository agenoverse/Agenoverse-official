import type { Event } from "@/types";
import { Link } from "react-router-dom";

// 🔹 Mock event list (will be replaced by DB data in future)
// interface Event {
//   id: number
//   category: string
//   title: string
//   description: string
//   location: string
//   date: string // ISO format for sorting
//   image: string
// }

const EventBanner = ({ event }: { event: Event }) => {
  const now = new Date();
  const eventDate = new Date(event.date);
  const dateTime = new Date(event.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const isPast = eventDate < now;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row overflow-hidden p-4 md:p-6 max-w-6xl mx-auto">
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="h-48  md:h-56 w-full object-cover rounded-xl"
        />
      </div>

      {/* Event Info */}
      <div className="flex-grow max-w-xl px-4 py-4 md:py-2 md:px-8 flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-blue-400 mb-2">
          {event.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base line-clamp-2 mb-4">
          {event.description}
        </p>
        <div className="text-sm text-gray-700 dark:text-gray-200 flex flex-col md:flex-row md:items-center md:gap-10">
          <p>
            <span className="font-medium">Location:</span> {event.location}
          </p>
          <p>
            <span className="font-medium">Event date:</span> {dateTime}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col justify-center  mt-4 md:mt-0 md:ml-auto">
        {!isPast && (
          <a
            href="#"
            className="bg-black text-center dark:bg-blue-600 text-white px-7 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-blue-700 transition"
          >
            Register Now!
          </a>
        )}
        <Link
          to={`/events/${event._id}`}
          className={
            isPast
              ? "text-center font-semibold text-sm text-gray-700 dark:text-gray-200 hover:underline"
              : "mt-2 text-center font-semibold text-sm text-gray-700 dark:text-gray-200 hover:underline"
          }
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default EventBanner;
