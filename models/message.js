const mongoose =  require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
    },
    to: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    }
  },{timestamps: true}
);

const Message = mongoose.model('Message', messageSchema);
 
module.exports = Message;