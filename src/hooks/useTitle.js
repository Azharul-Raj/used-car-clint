import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title=`${title} -UsedCarZone`
    },[title])
};

export default useTitle;