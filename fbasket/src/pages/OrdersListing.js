import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import CONFIG from "../config/app.config";
import SubHeader from "../components/SubHeader/SubHeader";
import getData from "../api/getData";
import { useDispatch } from "react-redux";
import { setOrders } from "../redux/actions/ordersActions";
import ListItems from "../components/Table/ListItems";

import { ordersDataParser } from "../services/dataParser";

const OrdersListing = () => {
  const dispatch = useDispatch();
  const [parsedOrdersList, setParsedOrdersList] = useState([]);

  useEffect(() => {
    getData(CONFIG.SERVER_URL + CONFIG.GET_ORDERS_URL)
      .then((response) => {
        dispatch(setOrders(response));
        return ordersDataParser(response);
      })
      .catch((error) => {
        throw error;
      })
      .then((parsedData) => {
        setParsedOrdersList(parsedData);
      });
  }, [parsedOrdersList, dispatch]);

  return (
    <Layout tab={CONFIG.ORDERS_TAB}>
      <SubHeader subTitle={CONFIG.ORDERS_SUBTITLE} />
      <ListItems
        rows={parsedOrdersList}
        columns={CONFIG.ORDERS_TABLE_HEADERS}
      />
    </Layout>
  );
};

export default OrdersListing;
