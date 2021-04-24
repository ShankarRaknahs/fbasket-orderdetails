export const productsDataParser = async (unParsedData) => {
  const uniqueProductIds = [
    ...new Set(unParsedData.map((product) => product.product_id)),
  ];

  const parsedData = await uniqueProductIds.map((productId) => {
    const productIdGroup = unParsedData.filter(
      (obj) => obj.product_id === productId
    );
    const groupQty = productIdGroup.reduce((totalQty, eachProduct) => {
      return totalQty + eachProduct.quantity;
    }, 0);

    const pendingOrders = productIdGroup.filter(
      (product) => product.order_status !== "Done"
    );
    const orderStatus = pendingOrders.length > 0 ? "Processing" : "Done";

    const parsedObj = {
      product_id: productId,
      order_status: orderStatus,
      quantity: groupQty,
      order_count: productIdGroup.length,
    };

    return parsedObj;
  });

  return parsedData;
};
