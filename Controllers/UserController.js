const connect_db = require("../db");

const GetAllUsers = (req, res) => {
  const sql = "SELECT * FROM student";
  connect_db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ msg: "internal server error" });
    }
    res.status(200).json(results);
  });
};

const createUser = (req, res) => {
  const { id, rollno, name } = req.body;
  const sql = "INSERT INTO student (rollno,name) VALUES (?,?)  ";
  connect_db.query(sql, [rollno, name], (err, results) => {
    if (err) {
      return res.status(500).json({ msg: "internal server error", err });
    }
    res.status(200).json({
      msg: "user created successfully!",
      Rollno: rollno,
      name: name,
    });
  });
};

const GetUserByID = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM student WHERE id = ?";
  connect_db.query(sql, [id], (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(results[0]);
  });
};

const UpdateUser = (req, res) => {
  const id = req.params.id;
  const { rollno, name } = req.body;
  const sql = "UPDATE student SET rollno = ?,name = ?";
  connect_db.query(sql, [rollno, name, id], (err, results) => {
    if (err) {
      return res.status(500).json({ msg: err });
    }
    res.status(200).json({ id: id, Rollno: rollno, name: name });
  });
};

const DeleteUser = (req,res)=>{
    const id = req.params.id;
    const sql = "DELETE FROM student WHERE id = ?";
    connect_db.query(sql,[id],(err,results)=>{
        if (err) {
            return res.status(500).json({ "msg": err });
        }
        res.status(200).json({"msg":"User Deleted Successfully!"})
    })
}

module.exports = { GetAllUsers, createUser, GetUserByID, UpdateUser,DeleteUser };
