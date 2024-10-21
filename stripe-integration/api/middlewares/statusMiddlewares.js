const statusChecker = async(req,res,next)=>{
    res.on('finish',()=>{
        const statusCode = res.statusCode;
        console.log(`Request to ${req.method} ${req.originalUrl} resulted in status code: ${statusCode}`);
    })
    next();

}

export default statusChecker