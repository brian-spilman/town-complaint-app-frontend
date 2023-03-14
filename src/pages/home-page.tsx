import { useEffect, useState } from "react";
import { Complaint, getAllComplaints } from "../api/project-requests";
import { ComplaintsList } from "../components/complaints-list";
import { NavBar } from "../components/navbar"


export function HomePage() {

    const [complaints, setComplaints] = useState<Complaint[]>([]);

    useEffect(()=>{
        (async ()=>{
            const complaintsList = await getAllComplaints();
            setComplaints(complaintsList);
        })();
    }, [])

    return <>
    
        <NavBar/>
        <h1>Welcome</h1>
        <h1>Initial Site</h1>
        <img src="https://media3.giphy.com/media/j5PHGhZMNOMznyhYPT/giphy.gif?cid=6c09b95269a48a139abb5a6a54bc47432e706bc8e35a069e&rid=giphy.gif&ct=g" alt="itysl" />
        <h3>Complaints List:</h3>
        <ComplaintsList complaints={complaints} />
    
    </>
}