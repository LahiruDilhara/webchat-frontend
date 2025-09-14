"use client";

import { DotLoader } from "react-spinners";
import ProgressBar from "../primitive/ProgressBar";

type RootLoadingScreenProps = {
    progress: number;
    title: string;
};
const RootLoadingScreen = ({ progress, title }: RootLoadingScreenProps) => {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="flex-4 flex flex-col justify-center items-center">
                <DotLoader color="#4d4dff" size={100} />
            </div>
            <div className="flex-1 items-center flex flex-col gap-4">
                <ProgressBar progress={progress} title={title} />
            </div>

        </div>
    );
}

export default RootLoadingScreen;