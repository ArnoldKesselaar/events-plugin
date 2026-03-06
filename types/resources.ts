// Plugin resource types
// Based on data-model.md

export interface Event {
  id: string;
  name: string;
  description?: string;
  startDate: string; // ISO date-time
  endDate: string; // ISO date-time
  location?: string;
  coverImage?: string; // URL
  status: 'draft' | 'published';
  tags?: string[];
  createdAt: string; // ISO date-time
  updatedAt: string; // ISO date-time
}

export interface Speaker {
  id: string;
  name: string;
  bio?: string;
  photo?: string; // URL
  company?: string;
  title?: string;
}

export interface Venue {
  id: string;
  name: string;
  capacity: number;
  location: string;
  amenities: string[];
}

export interface Session {
  id: string;
  eventId: string;
  title: string;
  description: string;
  sessionType: 'keynote' | 'workshop' | 'panel' | 'talk';
  duration: number; // minutes
  speakerIds: string[];
  venueId?: string;
  trackId?: string;
  tags: string[];
  status: 'draft' | 'published';
  createdAt: string; // ISO date-time
  updatedAt: string; // ISO date-time
}
