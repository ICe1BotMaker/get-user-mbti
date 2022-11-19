import { atomWithReset } from 'jotai/utils';
import { IMbtiResult, MBTI_TYPE } from 'types';

const mbti = atomWithReset<IMbtiResult[]>([{
    [MBTI_TYPE.E]: 0,
    [MBTI_TYPE.I]: 0,
    [MBTI_TYPE.N]: 0,
    [MBTI_TYPE.S]: 0,
    [MBTI_TYPE.F]: 0,
    [MBTI_TYPE.T]: 0,
    [MBTI_TYPE.P]: 0,
    [MBTI_TYPE.J]: 0,
}])

const currentStepAtom = atomWithReset<number>(0);

export { mbti, currentStepAtom }