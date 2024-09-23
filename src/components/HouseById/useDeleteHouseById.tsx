import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteItemByIdApi } from "../../services/items";
import { useNavigate } from "react-router-dom";

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
    onError: (err: any) => {
      toast.error(err?.message);
      console.log(err?.message);
    },
  });
  return { isPending, removeHouse };
}
