import { generateToken } from "../src/utils/jwt";

test("should generate token", () => {
    const token = generateToken({ id: 1, role: "ADMIN" });
    expect(token).toBeDefined();
});