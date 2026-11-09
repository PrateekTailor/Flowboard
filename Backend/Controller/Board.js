const board = require("../Models/Board");
const Column = require("../Models/Column");
const Task  = require("../Models/Task");
async function BoardFinding(req, res) {
  try {
    const Board = await board.find({ owner: req.user._id });
    res.json(Board);
  } catch (error) {
    console.log(error);
    res.json({ message: "findout some error" });
  }
}
async function BoardFindingbyid(req, res) {
  try {
    const BoardId = req.params.id;
    const Board = await board.findOne({ _id: BoardId, owner: req.user._id });
    if (!Board) {
     return res.status(404).json({ message: "Board is not found!" });
    }
    const column = await Column.find({ board: Board._id }).sort({
      position: 1,
    });
    const task = await Task.find({ board: Board._id });

    const columnwithtask = column.map((col) => ({
      _id: col._id,
      title: col.title,
      tasks: task.filter((t) => String(t.column) === String(col._id)),
    }));
    return res.json({
      board: { _id: Board._id, title: Board.title },
      columns: columnwithtask,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error.." });
  }
}
async function Createtask(req,res) {
    try {
    const BoardId = req.params.id;
    const {column,company,role,tags,duedate,} = req.body;
    const Board = await board.findOne({_id:BoardId,owner:req.user._id});
    if(!Board){
        return res.status(401).json({message:"board is not found"});
    }
    const col = await Column.findOne({_id:column,board:Board._id});
    if(!col){
        return res.status(401).json({message:"column is not found"});
    }
    const count  = await Task.countDocuments({column:col._id});
    const task = await Task.create({
        board:Board._id,
        column:col._id,
        company:company.trim(),
        role:role.trim(),
        dueDate:duedate || undefined,
        tags:tags || [],
        position:count,
    })
    res.status(201).json(task);
    } catch (error) {
     console.log(error);
    return res.status(401).json({message:"server error occurs please check your server..."});
    }
}
module.exports = {
    BoardFinding,
    BoardFindingbyid,
    Createtask,
};
