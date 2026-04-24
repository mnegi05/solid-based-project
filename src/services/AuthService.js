import bcrypt from "bcrypt"
import { generateToken } from "../utils/jwt.js";

class AuthService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }

    async register({ email, password, role }) {
        const existing = await this.userRepo.findByEmail(email);
        if (existing) {
            throw new Error("User already exists");
        }

        const hashed = await bcrypt.hash(password, 10);

        const user = await this.userRepo.create({
            email,
            password: hashed,
            role,
        });

        return { token: generateToken(user) };
    }

    async login({ email, password }) {
        const user = await this.userRepo.findByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error("Invalid credentials");
        }

        return { token: generateToken(user) };
    }
}

export default AuthService;