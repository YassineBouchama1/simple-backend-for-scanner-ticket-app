const TicketModel = require("../models/ticketModel");
const ApiError = require("../utils/ApiError");

exports.createTicket = async function(req, res, next) {
    try {
        const ticket = await TicketModel.create(req.body);
        res.status(201).json({ data: ticket, message: 'Ticket created' });
    } catch (error) {
        next(error);
    }
}

exports.getTickets = async function(req, res, next) {
    try {
        const tickets = await TicketModel.find();
        res.status(200).json({ data: tickets, message: 'Tickets' });
    } catch (error) {
        next(error);
    }
}

exports.showTicket = async function(req, res, next) {
    try {
        const { id } = req.query;
        if (!id) {
            return next(new ApiError('ID is required', 404));
        }
        const ticket = await TicketModel.findOne({ idTicket: id });
        if (!ticket) {
            return next(new ApiError('There is no ticket under this ID', 404));
        }
        res.status(200).json({ data: ticket, message: 'Ticket found' });
    } catch (error) {
        next(error);
    }
}

exports.updateTicket = async function(req, res, next) {
    try {
        const { id } = req.query;
        if (!id) {
            return next(new ApiError('ID is required', 404));
        }
        const ticket = await TicketModel.findOneAndUpdate({ idTicket: id }, { status: req.body.status }, { new: true });
        if (!ticket) {
            return next(new ApiError('There is no ticket under this ID', 404));
        }
        res.status(200).json({ data: ticket, message: 'Ticket updated' });
    } catch (error) {
        next(error);
    }
}

exports.deleteTicket = async function(req, res, next) {
    try {
        const { id } = req.query;
        if (!id) {
            return next(new ApiError('ID is required', 404));
        }
        const ticket = await TicketModel.deleteOne({ idTicket: id });
        if (!ticket) {
            return next(new ApiError('There is no ticket under this ID', 404));
        }
        res.status(200).json({ data: ticket, message: 'Ticket deleted' });
    } catch (error) {
        next(error);
    }
}
