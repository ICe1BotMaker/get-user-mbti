import { IMbtiResult } from "types";

const checkMbtiTestResult = (mbtiResult: IMbtiResult): string => { const result = []; const { E, I, N, S, F, T, P, J } = mbtiResult; if (E > I) result.push(`E`); else result.push(`I`); if (N > S) result.push(`N`); else result.push(`S`); if (F > T) result.push(`F`); else result.push(`T`); if (P > J) result.push(`P`); else result.push(`J`); return result.join(``); }

export default checkMbtiTestResult;