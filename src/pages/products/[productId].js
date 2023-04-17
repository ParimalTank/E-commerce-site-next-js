import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbars from '../../components/Navbars'
import { Grid, Rating, Typography } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import { useRouter } from "next/router";
import nookies from "nookies";

const ProductsDetails = () => {

  const router = useRouter();
  // Get the Product Id From the Query
  const productId = router.query.productId

  const [productDetail, setProductDetails] = useState({});

  const loadData = async () => {
    const result = await axios(`https://dummyjson.com/products/${productId}`);
    setProductDetails(result.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  {/* Specific Product Section */}
  return (
    <>
      <div>
        <Navbars />
      </div>

      <Grid container className="w-75 m-auto my-5">
        <Grid lg={6} md={6} sm={12}>
          <Carousel variant="dark">
            {productDetail?.images?.map((e) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Carousel.Item>
                  <img className="d-block w-100" src={e} alt={productDetail.title} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Grid>

        <Grid lg={6} md={6} sm={12} className="px-5 py-3">
          
            <Typography gutterBottom variant="h5" >
                {productDetail.title}
            </Typography>
            <Typography variant="h5" color="text.secondary">
               Category : {productDetail.category}
            </Typography>
            <div variant="body2" color="text.secondary">
              <h5> {productDetail.brand}</h5>
            </div>
            <div className="d-flex">
              Rating :{" "}
              <Rating
                name="read-only"
                value={parseInt(productDetail.rating)}
                readOnly
              />
            </div>
            <div variant="body2" color="text.secondary">
              <h5> Price : {productDetail.price}$</h5>
            </div>
            <div variant="body2" color="text.secondary">
              <h5> Discount : {productDetail.discountPercentage}%</h5>
            </div>
            <div variant="body2" color="text.secondary">
              <h5> Description : {productDetail.description}</h5>
            </div>
        </Grid>
      </Grid>
    </>
  );
};
export default ProductsDetails;

// For Private Routing
export async function getServerSideProps(ctx) {
  // Parse
  const cookies = nookies.get(ctx);

  if (!cookies?.loginUserData) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  
  return {
    props: {},
  };
}
