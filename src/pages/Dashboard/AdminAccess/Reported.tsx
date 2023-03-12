import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { productType } from '../../../types/data.types';
import ReportCard from './ReportCard';

const Reported = () => {
    const { data:reports=[],isLoading,refetch } = useQuery({
        queryKey: ['reported'],
        queryFn: () => axios.get('/reported').then(res => res.data)
    })
    
    return (
        <div className="grid grid-cols-1 my-6 lg:grid-cols-2 gap-4 place-items-center">
            {
                reports?.map((product:productType) => <ReportCard key={product._id} product={ product} refetch={refetch} />)
            }
        </div>
    );
};

export default Reported;