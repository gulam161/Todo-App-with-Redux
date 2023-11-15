import React, { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

function Todo() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.TodoReducer.list);

  return (
    <div className="min-h-screen bg-green-300 text-center flex justify-center items-center">
      <figure className="flex flex-col justify-center gap-y-2.5">
        <CalendarMonthIcon className="calender mx-auto text-red-400" />
        <figcaption className="text-red-500 font-medium text-2xl drop-shadow-2xl capitalize">
          Add your list here 👇
        </figcaption>
        <div className="flex justify-center bg-white py-1 px-3 mt-2.5 rounded-sm shadow-md">
          <input
            type="text"
            placeholder="Add Item..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className="outline-none border-none  "
          />
          <AddIcon
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
          />
        </div>
        <div className="show_item">
          {list.map((item) => {
            return (
              <div
                className="flex justify-between items-center capitalize py-0.5 px-2.5 rounded-sm font-medium bg-purple-600 text-white mt-3 shadow-md "
                key={item.id}
              >
                <h3 className="font-medium text-base">{item.data}</h3>
                <div className="todo_btn">
                  <DeleteForeverIcon
                    onClick={() => dispatch(deleteTodo(item.id))}
                    className="hover:text-red-500 hover:cursor-pointer"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="show_item">
          <button
            className=" effect04  flex items-center mx-auto mt-5  text-center rounded tracking-widest text-sm font-semibold leading-9 max-w-[120px] relative uppercase w-full text-black outline-black outline-1 outline no-underline transition-all duration-400 overflow-hidden hover:bg-purple-600 hover:outline-violet-600"
            data-sm-link-text="Remove All"
            onClick={() => dispatch(removeTodo())}
          >
            <span>CHECK LIST</span>
          </button>
        </div>
      </figure>
    </div>
  );
}

export default Todo;
