"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assignment = void 0;
var mongoose_1 = require("mongoose");
var AssignmentSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, index: true },
    title: { type: String, required: true },
    course: { type: String, required: true },
    due: { type: Date, required: true },
    status: {
        type: String,
        enum: ["pending", "in-progress", "done"],
        default: "pending",
        required: true,
    },
}, { timestamps: true });
// The `mongoose.models.Assignment` check prevents Mongoose from recompiling the model
exports.Assignment = mongoose_1.default.models.Assignment || mongoose_1.default.model("Assignment", AssignmentSchema);
