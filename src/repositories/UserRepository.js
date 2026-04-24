import { pool } from "../config/postgresdb.js";

class UserRepository {
    async create(user) {
        const result = await pool.query(
            "INSERT INTO users(email, password, role) VALUES($1, $2, $3) RETURNING *",
            [user.email, user.password, user.role]
        );
        return result.rows[0];

    }

    async findByEmail(email) {
        const result = await pool.query("SELECT * FROM users where email = $1", [email]);
        return result.rows;
    }
}

export default UserRepository;