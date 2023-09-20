const Todos = require('../models/todos');

exports.getTodo = async(req, res) =>{
    try{
        const todos = await Todos.find({});

        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire todo data fetched"
        });
        
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server error",
        })

    }
}



