"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireUser = requireUser;
// Stub auth: replace with real JWT later. Reads x-user-id header.
function requireUser(req, res, next) {
    var userId = req.headers["x-user-id"] || "demo-user";
    req.userId = userId;
    next();
}
