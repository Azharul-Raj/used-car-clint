import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import SpinnerMedium from "../../../components/SpinnerMedium";
import SingleProduct from "./SingleProduct";
import { productType } from "../../../types/data.types";

const MyProducts = () => {
  const contextData = useContext(AuthContext);
  const {
    data: myproducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myproducts", contextData?.user?.displayName, onload],
    queryFn: async () => {
      const res = await axios.get(
        `my_products/${contextData?.user?.displayName}`
      );
      return res.data;
    },
  });
  if (isLoading) {
    return <SpinnerMedium />;
  }
  return (
    <>
      {myproducts?.length ? (
        <div className="grid grid-cols-1 my-6 lg:grid-cols-2 gap-4 place-items-center">
          {myproducts.map((product: productType) => (
            <SingleProduct
              key={product._id}
              product={product}
              refetch={refetch}
            />
          ))}
        </div>
      ) : (
        <div className="">
          <h3 className="text-4xl font-bold">NO PRODUCTS FOUND</h3>
        </div>
      )}
    </>
  );
};

export default MyProducts;
