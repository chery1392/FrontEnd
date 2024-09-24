import { useMutation, useQueryClient } from "@tanstack/react-query";
import { edittemByIdApi } from "../../services/items";
import toast from "react-hot-toast";

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
        price: string;
      };
    }) => edittemByIdApi(id, updates),
    onSuccess: async () => {
      toast.success("با موفقیت تغییر یافت");
      await queryClient.invalidateQueries({
        queryKey: ["house"],
      });
    },
    onError: (err: any) => {
      toast.error(err?.message || "An error occurred");
      console.log(err?.message);
    },
  });

  return { isPending, editHouse };
}
