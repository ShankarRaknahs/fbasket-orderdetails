import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader/SubHeader";
import ListItems from "../components/Table/ListItems";
import getData from "../api/getData";
import CONFIG from "../config/app.config";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import { productsDataParser } from "../services/dataParser";

const ProductsListing = () => {
  const dispatch = useDispatch();
  const [parsedProductList, setParsedProductList] = useState([]);

  useEffect(() => {
    getData(CONFIG.SERVER_URL + CONFIG.GET_PRODUCTS_URL)
      .then((response) => {
        dispatch(setProducts(response.data));
        return productsDataParser(response.data);
      })
      .catch((error) => {
        throw error;
      })
      .then((parsedData) => {
        setParsedProductList(parsedData);
      });
  }, [parsedProductList, dispatch]);

  return (
    <Layout tab={CONFIG.PRODUCTS_TAB}>
      <SubHeader subTitle={CONFIG.PRODUCTS_SUBTITLE} />
      <ListItems
        rows={parsedProductList}
        columns={CONFIG.PRODUCTS_TABLE_HEADERS}
      />
    </Layout>
  );
};

export default ProductsListing;
