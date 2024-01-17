const EndingModal = ({ announcement, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>{announcement}</p>
            </div>
        </div>
    );
};

export default EndingModal;