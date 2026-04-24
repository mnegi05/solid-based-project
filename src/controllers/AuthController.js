
import bcrypt from "bcrypt";
import prisma from "../config/prisma";
import { generateToken } from "../utils/jwt";

exports.register = async (req, res) => {
    const { email, password, role } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { email, password: hashed, role },
    });

    res.json({ token: generateToken(user) });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ token: generateToken(user) });
};