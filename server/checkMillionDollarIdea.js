const checkMillionDollarIdea = (req, res, next) => {
    const revenue = Number(req.numWeeks) * Number(weeklyRevenue);
    if(!req.numWeeks || !req.weeklyRevenue || revenue < 1000000){
        res.status(400).send()
    } else{
        next();
    } 
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
