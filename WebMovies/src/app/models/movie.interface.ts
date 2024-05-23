export interface Movie {
    id: number;
    title: string;
    year: number;
    ids: {
        id: number;
        trakt: number;
        slug: string;
        imdb: string;
        tmdb: number;
    };
    watchers?: number | null;
    popular: boolean;
}