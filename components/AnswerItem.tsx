import styles from './AnswerItem.module.css'
import classNames from 'classnames/bind';
import { IMbtiItem, MBTI_TYPE } from 'types';
import { FiChevronRight } from 'react-icons/fi'

const cx = classNames.bind(styles);

interface IAnswerItemProps {
    answer: IMbtiItem;
    onClickAnswer: (type: MBTI_TYPE) => void;
}

function AnswerItem({ answer, onClickAnswer }: IAnswerItemProps) {
    return (
        <li className={cx(`answer-item`)}>
            <button onClick={() => onClickAnswer(answer.type)}>
                <span className={cx(`selected-item`)}>
                    <FiChevronRight fontSize={20} />
                </span>
                <span>{answer.text}</span>
            </button>
        </li>
    );
}

export default AnswerItem;