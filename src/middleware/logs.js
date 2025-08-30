const logRequest = (req, res, next) => {
    console.log(`Request ke path: ${req.path}`);
    next();
};

module.exports = logRequest;
