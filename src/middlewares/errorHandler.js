import logger from "../config/logger";

const errorHandler = (err, req, res, next) => {
    logger.error(err.message);

    res.status(500).json({
        message: err.message || "Internal Server Error",
    });
};

export default errorHandler;