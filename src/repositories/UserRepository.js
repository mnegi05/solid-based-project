import prisma from "../config/prisma.js";

class UserRepository {
    async create(user) {
        return prisma.user.create({ data: user });
    }

    async findByEmail(email) {
        return prisma.user.findUnique({ where: { email } });
    }
}

export default UserRepository;