import { useQuery } from "@tanstack/react-query";
import { SpinLoading } from "antd-mobile";
import getMbti from "apis/getMbti";
import MbtiCard from "components/MbtiCard";
import { useRouter } from "next/router";
import { Itypeitem } from "types";

function Result() {
    const router = useRouter();
    const { query } = router;

    const { data, isLoading, isError, error } = useQuery<Itypeitem[]>({
        queryKey: ['type'],
        queryFn: () => getMbti(query.type as string),
        enabled: !!query.type
    });

    const renderer = () => {
        if (isLoading) {
            return <SpinLoading />
        }

        if (data?.length) {
            return <MbtiCard data={data}/>
        }

        if (isError) {
            console.error(error)
            return <>에러가 발생했아요.</>
        }

        return <>해당하는 데이터가 존재하지 않아요.</>
    }

    return (
        <>{renderer()}</>
    )
}

export default Result;