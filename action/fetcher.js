import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const getData = (initialData) => {
  return useSWR("/api/advocates", fetcher, { fallbackData: initialData });
};
