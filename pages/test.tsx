import Layout from "components/Layout";
import { NavBar, Skeleton } from 'antd-mobile'
import { useQuery } from "@tanstack/react-query";
import { getMbtiTests } from "apis";
import TestWrapper from "components/TestWrapper";

function Test() {
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ["mbti-tests"],
        queryFn: getMbtiTests
    })

    const renderer = () => {
        if (isLoading) {
            return (
                <div>
                    <Skeleton.Title animated />
                    <Skeleton.Paragraph lineCount={5} animated />
                </div>
            );
        }

        if (data?.length) {
            return <TestWrapper data={data}/>
        }

        if  (isError) {
            console.error(error);
            return <>ERROR</>
        }

        return <>DATA IS NOT DEFINED</>
    }

    return (
        <Layout>
            <NavBar className="nav">Find My Hero</NavBar>
            {renderer()}
        </Layout>
    );
}

export default Test;