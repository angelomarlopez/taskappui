import mongoose from "mongoose";
import validator from "validator";


const ReservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error("Email is Invalid!");
        }
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

export default Reservation;