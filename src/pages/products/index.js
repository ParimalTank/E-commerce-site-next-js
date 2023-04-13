import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Row } from "reactstrap";
import {
  CardActions,
  CardContent,
  CardMedia,
  Pagination,
  Rating,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Navbars from '../../components/Navbars'

const Products = () => {
  const [productData, setProductData] = useState([]);

  // For Pagination(Set number of Product in Each Page)
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [limit, setLimit] = useState(8);

  const loadData = async (page, limit) => {
    const result = await axios(
      `https://dummyjson.com/products?skip=${(page - 1) * limit}&limit=${limit}`
    );
    setProductData(result.data.products);
    setNumberOfPages(Math.floor(result?.data?.total / limit));
  };

  useEffect(() => {
    loadData(page, limit);
  }, [page, limit]);

  const handleChange = (e, page) => {
    console.log(page);
    setPage(page);
  };

  return (
    <>

    <div>
      <Navbars />
    </div>

    <div className="m-5">
      <div className="text-center my-5">
        <h2>VIEW YOUR FAVORITE PRODUCTS</h2>
      </div>
      <Row className="justify-content-center">
        {productData.map((result, index) => {
          return (
            <Col key={index} sm="6" lg="3">
              <Card sx={{ maxWidth: 345 }} className="mb-3">
              <CardMedia
                  image={result.thumbnail}
                  sx={{ height: 310 }}
                  title={result.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="product-title"
                  >
                    Title : {result.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Category : {result.category}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Brand Name : {result.brand}
                  </Typography>
                  <Typography className="d-flex">
                    Rating :{" "}
                    <Rating name="read-only" value={result.rating} readOnly />
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Price : {result.price}$
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Discount : {result.discountPercentage}%
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    className="product-description"
                  >
                    Description : {result.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    legacyBehavior
                    href={`products/${result.id}`}
                    className="text-decoration-none text-white"
                  >
                    <Button
                      className="text-white mx-2"
                      variant="contained"
                      id="show-product"
                      style={{
                        backgroundColor: "#57c5b6",
                        borderColor: "#57c5b6",
                      }}
                      outline
                    >
                      Show Product
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Col>
          );
        })}
      </Row>
      <div className="d-flex justify-content-center">
        <Pagination
          justifyContent="center"
          count={numberOfPages}
          showFirstButton={true}
          showLastButton={true}
          onChange={(e, page) => handleChange(e, page)}
        />
      </div>
    </div>
    </>
  );
};

export default Products;
