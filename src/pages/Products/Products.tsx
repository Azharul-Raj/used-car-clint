import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import {  useParams } from "react-router-dom";
import SpinnerMedium from "../../components/SpinnerMedium";
import Product from "./Product";
import BookingModal from "./BookingModal/BookingModal";
import axios from "axios";
import { productType } from "../../types/data.types";

const Products = () => {
  const [bookItem, setBookItem] = useState(null);
  // const products = useLoaderData()
  const { id } = useParams();
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["category"],
    queryFn:  () =>axios.get(`/category/${id}`).then((res) => res.data)
    
  });
  if (isLoading) {
    return <SpinnerMedium />;
  }
  return (
    <>
      <div className="">
        {products?.map((product:productType) => (
          <Product
            key={product._id}
            product={product}
            setBookItem={setBookItem}
            refetch={refetch}
          />
        ))}
      </div>
      {bookItem && (
        <BookingModal
          bookItem={bookItem}
          setBookItem={setBookItem}
          // refetch={refetch}
        />
      )}
    </>
  );
};

export default Products;
