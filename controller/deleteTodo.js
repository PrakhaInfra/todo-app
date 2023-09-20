const Todos = require('../models/todos');

exports.deleteTodo = async(req, res) =>{
    try{
        const{id} = req.params;
        await Todos.findByIdAndDelete(id)
        

        res.json({
            success:true,
            message:"todo deleted",
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"something missing in db",
        })

    }
}

