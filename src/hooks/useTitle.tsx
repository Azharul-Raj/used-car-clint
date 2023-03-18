import { useEffect } from 'react';

const useTitle = (title:string|any) => {
    useEffect(() => {
        document.title=`${title} -UsedCarZone`
    },[title])
};

export default useTitle;