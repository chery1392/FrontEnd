import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getItemByIdApi } from "../../services/items";

export default function useHouseById() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["house"],
    queryFn: () => getItemByIdApi(id || ""),
    retry: false,
  });

  const item = data || {};
  return { item, isLoading };
}
