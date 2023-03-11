interface infoType {
  buyerName: string;
  orderID: string;
  productID: string;
  productName: string;
  sellerName: string;
  transactionID: string;
  buyerEmail: string;
}

export const addPayment = (info: infoType) => {
  fetch(`https://usedcarzone-server.vercel.app/payments`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(info),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
