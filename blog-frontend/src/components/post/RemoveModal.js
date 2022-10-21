import Modal from "../common/Modal";

const RemoveModal = ({ visible, onConfirm, onCancel }) => {
    return (
        <Modal
        visible={visible}
        title='포스트 삭제'
        description='포스트를 정말 삭제하시겠습니까?'
        confirmText="삭제"
        onConfirm={onConfirm}
        onCancel={onCancel}
        />
    );
};

export default RemoveModal;