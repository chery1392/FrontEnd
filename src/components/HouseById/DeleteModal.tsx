import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import useDeleteHouseById from "./useDeleteHouseById";
import { DeleteModalType } from "../../types/HouseByIdType";

const DeleteModal: React.FC<DeleteModalType> = ({
  deleteModalOpen,
  setDeleteModalOpen,
}) => {
  const { isPending, removeHouse } = useDeleteHouseById();
  const { id = "" } = useParams();
  const handelDelete = () => {
    removeHouse(id);
  };

  return (
    <Modal
      logo="حذف کردن آگهی"
      onClose={() => setDeleteModalOpen(false)}
      open={deleteModalOpen}
      width="w-full md:w-2/3 lg:w-1/2 "
    >
      <div className="flex items-center justify-center bg-white w-full p-6">
        <div className="flex gap-5 justify-center items-center font-bold text-lg w-full h-full">
          <Button
            className="w-36 p-2 rounded-md border-black border"
            variant="outline"
            onClick={() => setDeleteModalOpen(false)}
          >
            لغو
          </Button>
          <Button
            className="bg-error-300 text-white w-36 p-2 rounded-md"
            variant="danger"
            onClick={handelDelete}
          >
            حذف
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
