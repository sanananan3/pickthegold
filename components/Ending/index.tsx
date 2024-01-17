import './ending.css';

const EndingModal = ({ updatedBalance, isOpen, onClose }) => {
    if (!isOpen) return null;

    const isSuccess = updatedBalance > 100000;
    const animationClass = isSuccess ? 'sparkle-animation' : 'bomb-animation';
    const message = isSuccess ? '축하합니다!' : '아쉽습니다!';

    return (
        <div className={`modal ${animationClass}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default EndingModal;