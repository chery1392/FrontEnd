import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteItemByIdApi } from "../../services/items";
import { useNavigate } from "react-router-dom";
import { ErrorType } from "../../types/ErrorType";

export default function useDeleteHouseById() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: removeHouse } = useMutation({
    mutationFn: deleteItemByIdApi,
    onSuccess: async () => {
      toast.success("با موفقیت حذف شد");
      await queryClient.invalidateQueries({
        queryKey: ["house"],
      });
      navigate("/");
    },
    onError: (err: unknown) => {
      const errorMessage = (err as ErrorType)?.message || "حذف ناموفق بود";
      toast.error(errorMessage);
      console.log(errorMessage);
    },
  });
  return { isPending, removeHouse };
}
