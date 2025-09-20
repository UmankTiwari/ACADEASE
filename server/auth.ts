import { Request, Response, NextFunction } from "express";

// Stub auth: replace with real JWT later. Reads x-user-id header.
export function requireUser(req: Request, res: Response, next: NextFunction) {
  const userId = (req.headers["x-user-id"] as string) || "demo-user";
  (req as any).userId = userId;
  next();
}