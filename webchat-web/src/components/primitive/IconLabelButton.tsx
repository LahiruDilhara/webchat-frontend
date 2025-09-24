import { Caravan } from "lucide-react";

type Props = {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
}
const IconLabelButton = () => {
    return (<>
        <Caravan></Caravan>
    </>);
}

export default IconLabelButton;