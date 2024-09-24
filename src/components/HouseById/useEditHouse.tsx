import { useMutation, useQueryClient } from "@tanstack/react-query";
import { edittemByIdApi } from "../../services/items";
import toast from "react-hot-toast";
import { ErrorType } from "../../types/ErrorType";

export default function useEditHouse() {
  const queryClient = useQueryClient();

  const { isPending, mutate: editHouse } = useMutation({
    mutationFn: ({
      id,
      updates,
    }: {
      id: string;
      updates: {
        title: string;
        description: string;
        mobile_number: number;
        city: string;
        address: string;
        price: number;
      };
    }) => edittemByIdApi(id, updates),
    onSuccess: async () => {
      toast.success("با موفقیت تغییر یافت");
      await queryClient.invalidateQueries({
        queryKey: ["house"],
      });
    },
    onError: (err: unknown) => {
      const errorMessage = (err as ErrorType)?.message || "حذف ناموفق بود";
      toast.error(errorMessage);
    },
  });

  return { isPending, editHouse };
}
