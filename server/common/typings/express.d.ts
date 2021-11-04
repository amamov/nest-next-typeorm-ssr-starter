// import { UserDTO } from "server/users/dtos/user.dto";

declare global {
  namespace Express {
    // interface User extends UserDTO {}

    interface Request {
      token?: string;
      user?: Record<string, any>;
    }
  }
}
