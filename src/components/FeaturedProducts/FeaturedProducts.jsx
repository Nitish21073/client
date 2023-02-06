import React from "react";
import Card from "../Card/Card";
import "./featuredProducts.scss";
import useFetch from "../../hooks/useFetch";
const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        {/* <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, minus.
          Fugiat, itaque?
        </p> */}
      </div>
      <div className="bottom">
        { error?"Something went wrong":loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
