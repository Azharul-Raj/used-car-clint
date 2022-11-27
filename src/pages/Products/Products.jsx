import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SpinnerMedium from "../../components/SpinnerMedium";
import Product from "./Product";
import BookingModal from './BookingModal/BookingModal';

const Products = () => {
    const [bookItem, setBookItem] = useState(null);
  // const products = useLoaderData()
  const { id } = useParams();
  const { data: products = [], isLoading,refetch } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3001/category/${id}`);
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="">
        <SpinnerMedium />
      </div>
    );
  }
  console.log(typeof id);
    return (
      <>
    <div className="">
      {products?.map((product) => (
        <Product key={product._id} product={product} setBookItem={setBookItem} />
      ))}
            </div>
            {
                bookItem && <BookingModal bookItem={bookItem} setBookItem={setBookItem} refetch={refetch} />
            }
            </>
  );
};

export default Products;
