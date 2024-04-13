"use client"

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";

interface NavbarProps{
    isCollapsed:boolean,
    onResetWidth:()=>void;
}

export const Navbar=({isCollapsed,onResetWidth}:NavbarProps)=>{
    const params=useParams();
    const document=useQuery(api.documents.getById,{
        documentId:params.documentId as Id<"documents">
    });

    if(document===undefined){
        return <p>Loading...</p>
    }

    if(document===null){
        return null;
    }

    return(
        <>
        <nav className="bg:background dark:bg-[#1f1f1f]">

        </nav>
        </>
    )
}

