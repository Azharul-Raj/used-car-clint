import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import { userType, productType } from "./data.types";

export interface productProps{
    product:productType;
    setBookItem:React.Dispatch<React.SetStateAction<productType|any>>;
    refetch:<TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}

export interface buyerProp{
    buyer:userType;
    setBuyerId:React.Dispatch<React.SetStateAction<string|null|any>>;
    idx:number;
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
  }
export interface sellerProp{
    seller:userType;
    idx:number;
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
  }

  export interface reportedProps{
    reported:productType;
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
  }

  export interface buyerDeleteModalProps{
    buyerId:string;
    setBuyerId:React.Dispatch<React.SetStateAction<string|null|any>>;
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
  }
 