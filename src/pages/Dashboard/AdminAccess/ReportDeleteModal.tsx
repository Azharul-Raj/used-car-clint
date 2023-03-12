
import { productProps as reportedProps } from '../../../types/props.types';
import { ProductDelete } from '../../../Utilities/ProductDelete';

const ReportDeleteModal = ({refetch,product}:reportedProps) => {
    const handleDelete = (id?:string) => {
        ProductDelete(id, refetch);
    }
    return (
        <>
            <input type="checkbox" id="report-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box text-white">
    <h3 className="font-bold text-lg">Are you sure you want to delete this item</h3>
    <p className="py-4">If You Delete this item it can't be retrieve</p>
    <div className="modal-action">
      <label onClick={()=>handleDelete(product._id)} htmlFor="report-modal" className=" btn btn-sm text-white bg-red-500 hover:bg-red-500">Delete</label>
      <label htmlFor="report-modal" className="btn btn-sm text-white">Cancel</label>
    </div>
  </div>
</div>
        </>
    );
};

export default ReportDeleteModal;