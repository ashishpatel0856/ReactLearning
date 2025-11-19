
import React from 'react';

import { Card, CardActions, CardContent, Typography } from "@mui/material";

function TodoItem({ todo,fetchDetailsOfCurrentTodo }) {
    console.log(todo);
    return (
        <div>
            <Card className='mw-350 flex flex-col justify-between'>
                <CardContent>
                    <Typography variant="h5" color={"text.secondary"}>
                        {todo?.todo}
                    </Typography>
                </CardContent>
                <CardActions>
                    <button onClick={() => fetchDetailsOfCurrentTodo(todo?.id)} className="bg-blue-400 text-white opacity-90 p-2 rounded-sm border 
                   hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-lg 
                   transition-all duration-200">
                        Show Details
                    </button>
                </CardActions>
            </Card>
        </div>
    )
}
export default TodoItem;