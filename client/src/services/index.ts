/**
 * Services Layer Index
 * Clean, simple exports for all API services
 */

// Export all services
export { ProjectService } from "./project.service";
export { BlogService } from "./blog.service";
export { TeamService } from "./team.service";
export { ServiceService } from "./service.service";
export { EventService } from "./event.service";
export { JourneyService } from "./journey.service";
export { ContactService } from "./contact.service";

// Example usage in components:
// import { ProjectService, BlogService } from '@/services';
// const projects = await ProjectService.getProjects();
// const blogs = await BlogService.getPublishedBlogs();
