/* eslint-disable react-hooks/rules-of-hooks */
import FilterButtons from "./components/filters";
import ServicePng from "../../../public/services.png";
import Banner from "../../components/Banner";
import { useState } from "react";

import EventBanner from "./components/EventBanner";
import { useEvents } from "@/hooks";

type EventType = "all" | "nearest" | "latest";

const events = () => {
  const { events, loading, error } = useEvents();
  const [filter, setFilter] = useState<EventType>("all");
  const now = new Date();

  const filteredEvents = (() => {
    if (filter === "all") return events;

    if (filter === "nearest") {
      // sort future events by soonest date
      return events
        .filter((e) => new Date(e.date) > now)
        .sort((a, b) => +new Date(a.date) - +new Date(b.date));
    }

    if (filter === "latest") {
      // get only past events, and return latest one
      const pastEvents = events
        .filter((e) => new Date(e.date) < now)
        .sort((a, b) => +new Date(b.date) - +new Date(a.date));

      return pastEvents.length > 0 ? [pastEvents[0]] : [];
    }

    return events;
  })();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500 text-center">
          <p>
            Error loading blogs:{" "}
            {typeof error === "string"
              ? error
              : error?.message || String(error)}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-gray-500 text-center">
          <p>No Events available yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Banner
        title={"Events"}
        subtitle={"Join our community events."}
        description={
          "From startups to enterprises, we've helped businesses transform ideas into reality. Explore our portfolio to see how we blend creativity, technology, and strategy to deliver results that matter."
        }
        image={ServicePng}
      />
      <div className="mt-5">
        <FilterButtons selected={filter} onChange={setFilter} />
      </div>
      <div className="space-y-10">
        {filteredEvents.map((event) => (
          <EventBanner key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default events;
