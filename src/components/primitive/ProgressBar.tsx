type ProgressBarProps = {
    progress: number;
    title: string;
};
const ProgressBar = ({ progress, title }: ProgressBarProps) => {
    return (
        <>
            <h1 className="text-gray-500 w-full text-center">{title}</h1>
            <div className="md:w-xl lg:w-4xl md:h-2 rounded-4xl bg-gray-900">
                <div className={`h-full rounded-4xl bg-gray-700`} style={{ width: `${progress}%` }} ></div>
            </div>
            <h1 className="text-gray-500 w-full text-center">{progress} %</h1>
        </>
    );
}

export default ProgressBar;