import { JwtPayloadUserDefined } from "./jwt";

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayloadUserDefined
        }
    }
}
