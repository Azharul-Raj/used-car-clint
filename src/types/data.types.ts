export type advertiseItemsType = {
  _id: string;
  image: string;
  category_id: string;
  name: string;
  desc: string;
};

// export type productDataType={

// }

export type productType = {
  _id?: string;
  category_id:number|any;
  name: string;
  isReported: boolean;
  sellerName: string;
  image: string;
  brand: string;
  post_date: string;
  original_price: number;
  sale_price: number;
  used: number;
  location: string;
  condition: string;
  desc: string;
  phone:string;
  isVerified: boolean;
  isPaid: boolean;
  isSold: boolean;
  seller_email?:string;
};

export type userType={
  _id?:string;
  name:string;
  role:string;
  email:string;
  isVerified:boolean;
}

export type categoryType={
  _id:string;
  name:string;
  image:string;
  category_id:string;
}
export type bookModalType={
    bookItem:productType;
    setBookItem:React.Dispatch<React.SetStateAction<null>>;
}