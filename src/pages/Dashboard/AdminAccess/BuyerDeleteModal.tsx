import { buyerDeleteModalProps } from "../../../types/props.types";
import { buyerDelete } from "../../../Utilities/BuyerDelete";

const BuyerDeleteModal = ({
  buyerId,
  setBuyerId,
  refetch,
}: buyerDeleteModalProps) => {
  const handleDelete = (id: string) => {
    buyerDelete(id, refetch);
    setBuyerId(null);
  };
  return (
    <>
      <input type="checkbox" id="buyer-delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are You Sure you will delete buyer?
          </h3>
          <p className="py-4">If You delete buyer it can't be retrieved</p>
          <div className="modal-action">
            <label
              onClick={() => handleDelete(buyerId)}
              htmlFor="buyer-delete-modal"
              className="btn btn-sm bg-red-500 text-white"
            >
              Delete
            </label>
            <label htmlFor="buyer-delete-modal" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerDeleteModal;
