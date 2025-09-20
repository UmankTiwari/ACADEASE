"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timetable = void 0;
var mongoose_1 = require("mongoose");
var TimetableSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, index: true },
    day: { type: String, required: true, enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    slots: [
        {
            start: { type: String, required: true },
            end: { type: String, required: true },
            course: { type: String, required: true },
            room: { type: String, required: true }
        }
    ]
}, { timestamps: true });
// The `mongoose.models.Timetable` check prevents Mongoose from recompiling the model
exports.Timetable = mongoose_1.default.models.Timetable || mongoose_1.default.model("Timetable", TimetableSchema);
