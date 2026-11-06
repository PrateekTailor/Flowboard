import { useState } from "react";
import { mockBoard } from "../Data/mockBoard"


export const useBoard =(boardId)=>{
    const [boards] = useState(mockBoard);
    const board = boards.find((b)=>b._id===boardId);
    return board;
}