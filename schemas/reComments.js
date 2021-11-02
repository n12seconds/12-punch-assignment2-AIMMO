const mongoose = require("mongoose");
// 대댓글
const Schema = mongoose.Schema;

const reCommentsSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "reComments" },
  comment: { type: Schema.Types.ObjectId, ref: "Comments" },
  content: String,
  createDate : Date,
  updateDate : Date  
});

const reComments = mongoose.model("reComments", reCommentsSchema);

module.exports = reComments;
