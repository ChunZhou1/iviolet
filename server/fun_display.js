var order_data_array = [];

function findOrderData(inputObj) {
  return (
    inputObj.address === this.address &&
    inputObj.orderNumber === this.orderNumber
  );
}

const processOrderStatus = (orderData) => {
  let index = order_data_array.findIndex(findOrderData, orderData);
  if (index === -1) {
    //we will insert
    order_data_array.push(orderData);
    return { status: "success" };
  }

 
  //we will modify
  order_data_array[index].orderStatus = orderData.orderStatus;
  return { status: "success" };
};

const clearOrderData = () => {
  order_data_array.splice(0, order_data_array.length);
  return { status: "success" };
};

const getOrderDataArray =()=>order_data_array.filter(item=>item.orderStatus!=="completePick")

module.exports = {
  order_data_array: order_data_array,
  processOrderStatus: processOrderStatus,
  clearOrderData: clearOrderData,
  getOrderDataArray:getOrderDataArray
};
