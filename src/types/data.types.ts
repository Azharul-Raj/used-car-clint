export type advertiseItemsType = {
  _id: string;
  image: string;
  category_id: string;
  name: string;
  desc: string;
};

export type productType = {
  _id: string;
  name: string;
  isReported: boolean;
  sellerName: string;
  image: string;
  brand: string;
  poste_date: string;
  original_price: number;
  sale_price: number;
  used: number;
  location: string;
  condition: string;
  desc: string;
  isVerified: boolean;
  isPaid: boolean;
  isSold: boolean;
};

export type userType={
  _id:string;
  name:string;
  role:string;
  email:string;
  isVerified:boolean;
}

export type categoryType={
  name:string;
  image:string;
  category_id:string;
}
export type bookModalType={
    bookItem:productType;
    setBookItem:React.Dispatch<React.SetStateAction<null>>;
}