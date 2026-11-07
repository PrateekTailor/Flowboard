const board = require("../Models/Board");
const column = require("../Models/Column");

const DEFAULT_COLUMN=["Applied","OA","Interview","Offer","Reject"];
const createdefaultboard=async(userId)=>{
    const Board = await board.create({
        title:"Placement 2026",
        owner:userId,
    })
    console.log("Board:",Board);
    const Column = DEFAULT_COLUMN.map((name,index)=>({
        board:Board._id,
        title:name,
        position:index,
    }))
    await column.insertMany(Column);
    return Board;
}
module.exports = {
    createdefaultboard
}