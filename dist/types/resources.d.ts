export interface Event {
    id: string;
    name: string;
    description?: string;
    startDate: string;
    endDate: string;
    location?: string;
    coverImage?: string;
    status: 'draft' | 'published';
    tags?: string[];
    createdAt: string;
    updatedAt: string;
}
export interface Speaker {
    id: string;
    name: string;
    bio?: string;
    photo?: string;
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
    duration: number;
    speakerIds: string[];
    venueId?: string;
    trackId?: string;
    tags: string[];
    status: 'draft' | 'published';
    createdAt: string;
    updatedAt: string;
}
