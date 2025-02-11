import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import useAxiosSecure from "../useAxios";

const useDeleteMutate = (
  route,
  queryKey,
  onSuccess = () => {},
  onError = () => {}
) => {
  const Axios = useAxiosSecure();
  const token = Cookies.get("user");

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id) =>
      Axios.delete(route, {
        data: id, // Body should be inside `data`
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    // refetchInterval: 200,
    onSuccess: (mutatedData) => {
      queryClient.invalidateQueries({ queryKey });
      queryClient.refetchQueries();
      onSuccess(mutatedData);
    },
    onError: (err) => {
      console.log(err);
      onError(err);
    },
  });

  return { mutate, isPending };
};

export default useDeleteMutate;
