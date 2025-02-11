import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxios";
import Cookies from "js-cookie";
const useFetchById = (route) => {
  const Axios = useAxiosSecure();
  const token = Cookies.get("user");

  const { data, isSuccess, isLoading, refetch } = useQuery({
    queryKey: ["get-by-id"],
    queryFn: () =>
      Axios(route, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    // refetchInterval: 50,
  });
  return { data: data?.data, isSuccess, isLoading, refetch };
};

export default useFetchById;
