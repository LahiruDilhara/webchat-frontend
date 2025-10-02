"use client";

import { CircleLoader, DotLoader } from "react-spinners";

type TitleLoadingPageProps = {
    title: string;
};
const TitleLoadingPage = ({title}:TitleLoadingPageProps) => {
    return (
        <div className="w-full h-screen flex flex-col fixed top-0 left-0 z-100 bg-background">
            <div className="flex-4 flex flex-col justify-center items-center">
                <CircleLoader color="#4d4dff" size={150} />
            </div>
            <div className="flex-1 items-center flex flex-col gap-4">
                <h1>{title}</h1>
            </div>
        </div>
    );
}
 
export default TitleLoadingPage;