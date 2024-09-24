import {
  EditdButton,
  TrashButton,
} from "../../icons/FetchHouseIcon";
import ButtonIcon from "../../ui/ButtonIcon";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

interface FetchHousrHeaderType {
  city: string;
  titleGroup: string;
  title: string;
}

const FetchHousrHeader: React.FC<FetchHousrHeaderType> = ({
  city,
  titleGroup,
  title,
}) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  return (
    <div className="space-y-5 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-sm md:text-base text-gray-400">
              {titleGroup} خانه در {city}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ButtonIcon
              variant="outline"
              onClick={() => setDeleteModalOpen(true)}
            >
              <TrashButton />
            </ButtonIcon>
            <ButtonIcon
              variant="outline"
              onClick={() => setEditModalOpen(true)}
            >
              <EditdButton />
            </ButtonIcon>
          </div>
        </div>
        <div>
          <p className="font-bold text-lg lg:text-xl">{title}</p>
        </div>
      </div>
      <DeleteModal
        deleteModalOpen={deleteModalOpen}
        setDeleteModalOpen={setDeleteModalOpen}
      />
      <EditModal
        editModalOpen={editModalOpen}
        setEditModalOpen={setEditModalOpen}
      />
    </div>
  );
};

export default FetchHousrHeader;
