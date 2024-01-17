import './ending.css';

interface UpdatedDataItem {
    nickname: string;
    balance: number;
}

interface EndingModalProps {
    updatedData: UpdatedDataItem[];
    isOpen: boolean;
    onClose: () => void;
}

const EndingModal: React.FC<EndingModalProps> = ({ updatedData, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <table className="endingtable">
                    <thead>
                        <tr>
                            <th>닉네임</th>
                            <th>잔액</th>
                            <th></th> {/* 이모지 칼럼 */}
                        </tr>
                    </thead>
                    <tbody>
                        {updatedData.map(({ nickname, balance }) => (
                            <tr key={nickname}>
                                <td>{nickname}</td>
                                <td>{balance}원</td>
                                <td>{balance < 100000 ? '💣' : '🎉'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EndingModal;