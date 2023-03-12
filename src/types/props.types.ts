import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import { User, UserCredential } from "firebase/auth";
import { userType, productType } from "./data.types";

export interface Refetchable {
  refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>;
}

export interface productProps extends Refetchable {
  product: productType;
  setBookItem: React.Dispatch<React.SetStateAction<productType|any>>;
}

export interface buyerProp extends Refetchable {
  buyer: userType;
  setBuyerId: React.Dispatch<React.SetStateAction<string|null|any>>;
  idx:number;
}

export interface sellerProp extends Refetchable {
  seller: userType;
  idx:number;
  setSellerId:React.Dispatch<React.SetStateAction<string|null|any>>;
  setSeller:React.Dispatch<React.SetStateAction<string>>;
}

export interface reportedProps extends Refetchable {
  reported: productType;
}

export interface buyerDeleteModalProps extends Refetchable {
  buyerId:string;
  setBuyerId:React.Dispatch<React.SetStateAction<string|null|any>>;
}
export interface sellerDeleteModalProps extends Refetchable {
  sellerId:string;
  seller:string;
  setSellerId:React.Dispatch<React.SetStateAction<string|null|any>>;
}


export interface authContextProps{
  loading:boolean;
  user:User|null;
  emailSignUp:(email:string,password:string)=>Promise<UserCredential>;
  emailLogin:(email:string,password:string)=>Promise<UserCredential>;
  googleSignIn:()=>Promise<UserCredential>;
  updateInfo:(name:string,image?:string)=>void;
  logOut:()=>void;
}