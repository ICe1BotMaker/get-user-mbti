import { Button, Modal, ProgressBar } from 'antd-mobile'
import { IMbti, MBTI_TYPE } from 'types';
import styles from './TestWrapper.module.css'
import classNames from 'classnames/bind'
import { useState } from 'react'
import AnswerItem from './AnswerItem';
import { currentStepAtom, mbti } from 'store';
import { useAtom } from 'jotai';
import checkMbtiTestResult from 'utils/checkMbtiResult';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles)

interface ITestWrapper {
    data: IMbti[];
}

function TestWrapper({ data }: ITestWrapper) {
    const [currentIndex, setCurrentIndex] = useAtom(currentStepAtom);
    const [currentMbti, setCurrentMbti] = useAtom(mbti);
    const [modalVisible, setModalVisible] = useState(false);

    const router = useRouter();

    const handleClickAnswer = (type: MBTI_TYPE) => {
        setCurrentMbti((prev) => [
            ...prev,
            {
                ...prev[prev.length - 1],
                [type]: prev[prev.length - 1][type] + 1,
            }
        ]);

        if (currentIndex === data.length - 1) {
            setModalVisible(true);
            return;
        }

        setCurrentIndex(currentIndex + 1);
    }

    const handleClickPrev = () => {
        setCurrentIndex((prev) => prev - 1);
        setCurrentMbti((prev) => prev.slice(0, currentIndex));
    }

    return (
        <>
            <ProgressBar percent={(currentIndex + 1) * (100 / data.length)} rounded={false}/>
            <div className={cx(`wrapper`)}>
                <h2 className={cx(`question`)}>{data[currentIndex].question}</h2>
                <ul className={cx(`answer-wrapper`)}>
                    {
                        data[currentIndex].answers.map(answer => (
                            <AnswerItem key={answer.text} answer={answer} onClickAnswer={handleClickAnswer} />
                        ))
                    }
                </ul>
                { currentIndex !== 0 && <div className={cx(`button-wrapper`)}><Button className={cx([`action-button`, `prev-button`])} onClick={handleClickPrev}>한문제 뒤로</Button></div> }
            </div>
            <Modal visible={modalVisible} content="제출하시겠습니까?" closeOnMaskClick onClose={() => { setModalVisible(false) }} onAction={({ key }) => { if (key === `ok`) { const result = checkMbtiTestResult(currentMbti[currentMbti.length - 1]); router.push(`/result?type=${result}`) } }} actions={[{key: `ok`, text: `네`}, {key: `cancel`, text: `아니요`}]}/>
        </>
    );
}

export default TestWrapper;