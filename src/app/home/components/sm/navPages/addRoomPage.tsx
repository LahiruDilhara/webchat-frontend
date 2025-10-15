import { useState } from "react";
import AddRoom from "../../addRoom/AddRoom";

const AddRoomPage = () => {
    const [dualUser, setDualUser] = useState(true);
    return (
        <div>
            <div className="w-full py-md text-center">
                <h1 className="text-h3">{dualUser ? "Add Dual User Room" : "Add Multi User Room"}</h1>
            </div>
            <AddRoom onDualUser={(value) => setDualUser(value)} />
        </div>
    );
}

export default AddRoomPage;