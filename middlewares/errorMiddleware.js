const errorMiddleware = (err, req, res, next) => {
    // Log the error for debugging
    console.error(err.stack);

    // Set the status code, if it's not already set, default to 500 (server error)
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    // Send the error response
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Server Error',
    });
};

module.exports = errorMiddleware;
