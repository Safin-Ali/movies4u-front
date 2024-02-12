import { HttpFetch } from '@/utils/http-fetcher';

export const moviesDBApi = new HttpFetch (process.env.MOVIES4U_SERVER!);