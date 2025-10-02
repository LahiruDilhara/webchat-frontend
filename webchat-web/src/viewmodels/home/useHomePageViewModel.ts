import { useState } from "react";

export default function useHomePageViewModel(){
    const [loading,setLoading] = useState(true);

    return {loading}
}