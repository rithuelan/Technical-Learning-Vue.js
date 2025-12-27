export function useFetchApi<T>(url: string) {
  const { data, pending, error } = useFetch<T>(url)
  return { data, pending, error }
}
