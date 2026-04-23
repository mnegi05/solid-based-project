import { z } from "zod";

const orderSchema = z.object({
    amount: z.number().positive(),
});

export default orderSchema;