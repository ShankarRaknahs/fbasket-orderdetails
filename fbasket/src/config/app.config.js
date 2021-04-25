const CONFIG = {
  SERVER_URL: "http://localhost:4000",
  APP_TITLE: "Fbasket",
  PRODUCTS_SUBTITLE: "Sold Products",
  ORDERS_SUBTITLE: "All Orders",
  PRODUCTS_TAB: "products",
  ORDERS_TAB: "orders",
  DASHBOARD_TAB: "dashboard",
  CUSTOMERS_TAB: "customers",
  GET_PRODUCTS_URL: "/v1/products/sold",
  GET_ORDERS_URL: "/v1/products/sold",
  PRODUCTS_TABLE_HEADERS: [
    { id: "product_id", label: "Product ID", minWidth: 50 },
    { id: "status", label: "Order Status", minWidth: 30 },
    { id: "quantity", label: "Quantity", minWidth: 10 },
    { id: "order_count", label: "No. of Orders", minWidth: 10 },
    { id: "edit_order", label: "", minWidth: 30 },
  ],
  ORDERS_TABLE_HEADERS: [
    { id: "orderId", label: "Order ID", minWidth: 10 },
    { id: "product_id", label: "Product ID", minWidth: 20 },
    { id: "status", label: "Order Status", minWidth: 30 },
    { id: "quantity", label: "Quantity", minWidth: 10 },
  ],
};

export default CONFIG;
