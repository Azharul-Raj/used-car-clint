import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Category from "./Category";
import SpinnerMedium from "../../../components/SpinnerMedium";
import { categoryType } from "../../../types/data.types";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => axios.get("/categories").then((res) => res.data),
  });
  if (isLoading) {
    return <SpinnerMedium />;
  }
  return (
    <div className="my-10">
      <div className="">
        <h4 className="text-center text-white text-4xl mb-5 divider">
          Categories
        </h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 place-items-center">
        {categories?.map((category: categoryType) => (
          <Category key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
