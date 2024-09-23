import { useQuery } from "@tanstack/react-query";
import { getItemApi } from "../../services/items";

export default function useHouse() {
  const { data, isLoading } = useQuery({
    queryKey: ["house"],
    queryFn: () => getItemApi(),
    retry: false,
  });
  const items = Array.isArray(data) ? data : [];
  return { items, isLoading };
}
