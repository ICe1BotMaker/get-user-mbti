export enum MBTI_TYPE {
    E = `E`,
    I = `I`,
    N = `N`,
    S = `S`,
    F = `F`,
    T = `T`,
    P = `P`,
    J = `J`
}

export type IMbtiResult = {
    [key in MBTI_TYPE]: number;
}

export interface IMbtiItem {
    text: string;
    type: MBTI_TYPE;
}

export interface IMbti {
    question: string;
    answers: IMbtiItem[]
}

export interface Itypeitem {
    name: string,
    description: string,
    title: string,
    type: string
}