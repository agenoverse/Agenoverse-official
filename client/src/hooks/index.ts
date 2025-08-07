/**
 * Hooks Index - Clean exports for all React hooks
 * Professional API integration hooks for easy component usage
 */

// Project hooks
export { useProjects, useProject, useCreateProject } from "./useProjects";

// Blog hooks
export { useBlogs, useBlog, useBlogBySlug, useCreateBlog } from "./useBlogs";

// Team hooks
export {
  useTeam,
  useTeamMember,
  useTeamByRole,
  useCreateTeamMember,
} from "./useTeam";

// Services hooks
export { useServices, useService, useCreateService } from "./useServices";

// Events hooks
export {
  useEvents,
  useUpcomingEvents,
  usePastEvents,
  useEvent,
  useCreateEvent,
} from "./useEvents";

// Journey hooks
export {
  useJourney,
  useJourneyByYear,
  useJourneyItem,
  useCreateJourneyItem,
} from "./useJourney";

// Contact hooks
export { useContacts, useContact, useSendContact } from "./useContact";

/*
USAGE EXAMPLES:

// In your components
import { 
  useProjects, 
  usePublishedBlogs, 
  useTeam,
  useUpcomingEvents 
} from '@/hooks';

// Simple data fetching
const { projects, loading, error } = useProjects();
const { blogs } = usePublishedBlogs();
const { team } = useTeam();
const { events } = useUpcomingEvents();

// Creating new items
const { createProject } = useCreateProject();
const { sendContact } = useSendContact();

// Usage in component
const handleSubmit = async (data) => {
  try {
    await createProject(data);
    // Handle success
  } catch (error) {
    // Handle error
  }
};
*/
