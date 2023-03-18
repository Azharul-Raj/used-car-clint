interface infoType {
  buyerName: string;
  orderID: string | undefined;
  productID: string;
  productName: string;
  sellerName: string;
  transactionID: any;
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
