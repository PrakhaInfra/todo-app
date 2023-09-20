const Todos = require('../models/todos');

exports.updateTodo = async(req, res) =>{
    // console.log("here");
    try{
        const {id} = req.params;
        const {title, description} = req.body;
        const todos = await Todos.findByIdAndUpdate(
            {_id:id},
            {title, description, updateAt: Date.now()},
        )
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:`updated succesfully`,
        })
        
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"something wrong",
        })

    }
}

