import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItemApi } from "../../services/items";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface ApiError {
  message: string;
  status?: number; 
}

export default function useAddHouse() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: addHouse } = useMutation({
    mutationFn: addItemApi,
    onSuccess: async () => {
      toast.success("با موفقیت اضافه شد");

      await queryClient.invalidateQueries({
        queryKey: ["house"],
      });
      navigate("/");
    },
    onError: (err: unknown) => {
      const apiError = err as ApiError; 
      toast.error(apiError?.message || "خطایی رخ داده است");
    },
  });

  return { isPending, addHouse };
}
