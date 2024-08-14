import React from "react";
import { useParams } from "react-router-dom";

export function User(){
    const {id} = useParams()
    return (
        <div className="text-center font-bold bg-gray-500 text-white text-4xl p-4">
            User:-{id}
        </div>
    )
}