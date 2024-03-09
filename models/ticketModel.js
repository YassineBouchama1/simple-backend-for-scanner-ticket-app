const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  idTicket: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "to short ticket title"],
    maxlength: [100, "to long ticket title"],
  },
  price: {
    type: Number,
    required: true,
  },
  coverEvent: {
    type: String,
    required: true,
  },
    imageBuyer: {
    type: String,
    required: true,
  },
  status:{
    type:String,
    required:true
  }
});

const TicketModel = mongoose.model("Ticket", ticketSchema);

module.exports = TicketModel;
