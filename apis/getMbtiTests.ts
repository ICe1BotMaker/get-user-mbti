import { collection, getDocs } from "firebase/firestore"
import { FireStorage } from 'firestore'

const getMbtiTests = async () => {
    const querySnapshot = await getDocs(collection(FireStorage, "mbti"));
    const data = querySnapshot.docs.map(item => item.data().questions)[0];
    return data;
}

export default getMbtiTests;