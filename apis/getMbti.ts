import { collection, getDocs } from "firebase/firestore";
import { FireStorage } from "firestore";
import { Itypeitem } from 'types';

const getMbti = async (mbtiType: string) => {
    const querySnapshot = await getDocs(collection(FireStorage, 'mbti-type'));
    const data = querySnapshot.docs
                .map((item) => item.data().types)[0]
                .filter((type: Itypeitem) => type.type === mbtiType);
    return data;
}

export default getMbti;