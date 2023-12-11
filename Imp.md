Drop down - 

```javascript
import React, { useState } from "react";

const country = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "America",
    value: "USA",
    cities: ["New-york", "California"],
  },
  {
    name: "Australia",
    value: "AUS",
    cities: ["London", "England"],
  },
];
function Dropdown() {
  const [city, setCity] = useState("");
  return (
    <div>
      <select
        value={city}
        onChange={(e) => {
          console.log(e.target.value);
          setCity(e.target.value);
        }}
      >
        {country.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
      <br />
      <select value={city.value}>
        {country
          .find((item) => item.value === city)
          ?.cities.map((item, index) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Dropdown;
```

```javascript
[12/11/2023 2:10 PM] : import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https:dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const appleProducts = products.filter((product) => product.brand === "Apple");

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-5 text-center">Apple Products</h1>
    </div>
  );
};

export default App;
[12/11/2023 2:10 PM] : import React from "react";

function MapAndFilter(product) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {appleProducts.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-32 object-cover mb-4"
          />
          <h2 className="text-lg font-semibold text-black">{product.title}</h2>
          <p className="text-green-600 font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default MapAndFilter;

```

```javascript
[12/11/2023 2:05 PM] :   src/App.js

 import React, { useState, useEffect } from "react";
 import { useNavigate } from "react-router-dom";

 const Signup = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const navigate = useNavigate();

    Load user's name from localStorage on component mount
   useEffect(() => {
     const storedName = localStorage.getItem("userName");
     if (storedName) {
       setName(storedName);
     }
   }, []);

   const handleSend = () => {
      Save user's name to localStorage
     localStorage.setItem("userName", name);

      You can perform any necessary actions here before navigating
      For now, just navigate to the next page with the name as a query parameter
     navigate(/welcome?name=${encodeURIComponent(name)});
   };

   return (
     <div className="flex flex-col items-center justify-center h-screen">
       <h1 className="text-4xl mb-6">Enter Details</h1>
       <input
         type="text"
         placeholder="Name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         className="mb-4 p-2 border border-gray-300"
       />
       <input
         type="email"
         placeholder="Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         className="mb-4 p-2 border border-gray-300"
       />
       <button
         onClick={handleSend}
         className="bg-blue-500 text-white p-2 rounded"
       >
         Send
       </button>
     </div>
   );
 };

 export default Signup;
[12/11/2023 2:05 PM] :  src/Welcome.js

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name");

   Clear stored data when the component mounts
  useEffect(() => {
    localStorage.removeItem("userName");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-6">Welcome {name}</h1>
    </div>
  );
};

export default Welcome;
```

Timer app
```javascript
[12/11/2023 2:04 PM] : Count down timer - import React, { useState, useEffect } from "react";

const Timer = ({ initialMinutes }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const handlePlay = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(initialMinutes);
    setSeconds(0);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  return (
    <div>
      <div>
        <span>
          Time Remaining: {minutes}:{seconds < 10 ? 0${seconds} : seconds}
        </span>
      </div>
      <button onClick={handlePlay} disabled={isActive}>
        Play
      </button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handlePause} disabled={!isActive}>
        Pause
      </button>
    </div>
  );
};

export default Timer;
[12/11/2023 2:08 PM] : Timer app - import React, { useState } from "react";
import Timer from "./components/Timer/Timer";

const App = () => {
  const [inputMinutes, setInputMinutes] = useState(5);

  return (
    <div>
      <input
        type="number"
        value={inputMinutes}
        onChange={(e) => setInputMinutes(parseInt(e.target.value))}
      />
      <Timer initialMinutes={inputMinutes} />
    </div>
  );
};

export default App;
```

Todo
```javascript
[12/11/2023 2:02 PM] :  src/components/TodoItem.jsx
import React, { useState } from "react";

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleUpdate = () => {
    updateTodo(todo.id, updatedTitle);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-2">
      {isEditing ? (
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          className="border p-2 mr-2"
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <div>
        {isEditing ? (
          <>
            <button className="mr-2 text-green-500" onClick={handleUpdate}>
              Save
            </button>
            <button
              className="text-gray-500"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="mr-2 text-blue-500"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="text-red-500"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
[12/11/2023 2:02 PM] :  src/components/TodoList.jsx
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
[12/11/2023 2:03 PM] :   src/App.jsx
 import React, { useState } from "react";
 import TodoList from "./components/TodoList";
 import AddTodo from "./components/AddTodo";

 function App() {
   const [todos, setTodos] = useState([]);

   const addTodo = (newTodo) => {
     setTodos([...todos, { id: Date.now(), title: newTodo }]);
   };

   const deleteTodo = (id) => {
     setTodos(todos.filter((todo) => todo.id !== id));
   };

   const updateTodo = (id, updatedTitle) => {
     setTodos(
       todos.map((todo) =>
         todo.id === id ? { ...todo, title: updatedTitle } : todo
       )
     );
   };

   return (
     <div className="container mx-auto p-4">
       <h1 className="text-3xl font-bold mb-4">To-Do App</h1>
       <AddTodo addTodo={addTodo} />
       <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
     </div>
   );
 }

 export default App;
```

```Javascript
 TextAppend.js
import React, { useState } from 'react';
import TextField from './TextField';

const TextAppend = () => {
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');

  const handleFirstTextChange = (e) => {
    const newText = e.target.value;
    setFirstText(newText);
    setSecondText(newText + ' ' + secondText);
  };

  const handleSecondTextChange = (e) => {
    const newText = e.target.value;
    setSecondText(firstText + ' ' + newText);
  };

  return (
    <div>
      <div data-testid="first-text">
        <TextField labelText="First Text" onChange={handleFirstTextChange} />
      </div>
      <div data-testid="second-text">
        <TextField labelText="Second Text" onChange={handleSecondTextChange} />
      </div>
      <label data-testid="final-text">{firstText} {secondText}</label>
    </div>
  );
};

export default TextAppend;
[12/11/2023 12:53 PM] Avinash Pandey:  TextField.js
import React from 'react';

const TextField = ({ labelText, onChange }) => (
  <div>
    <label data-testid="label">{labelText}:</label>
    <input type="text" onChange={onChange} data-testid="input" />
  </div>
);

export default TextField;

Counter - 
[12/11/2023 2:00 PM] : import React, { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter < 50) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="bg-gray-900 text-white text-center">
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button className="bg-green-500 text-white m-1 p-1" onClick={addValue}>
        Increment
      </button>
      <br />
      <button className="bg-red-500 text-white m-1 p-1" onClick={removeValue}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
[12/11/2023 2:00 PM] : import React, { useState } from "react";

Bgchange - 

function BgChange() {
  const storedColor = localStorage.getItem("backgroundColor");
  const [color, setColor] = useState(storedColor);
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
            <button
              className="outline-none px-4 py-1 rounded-md bg-red-500 text-white shadow-lg"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-md bg-green-500 text-white shadow-lg"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-md bg-blue-500 text-white shadow-lg"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BgChange;

Props -
[12/11/2023 2:01 PM] : import React from "react";

function Props(props) {
  console.log(props.username);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="relative h-[400px] w-[300px] rounded-md flex justify-center items-center min">
          <img
            src="https:images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              {props.username}
            </h1>
            <p className="mt-2 text-sm text-gray-300">{props.userAge}</p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              {props.userProfile}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Props;


 In APp.jsx
  let myObj = {
     username: "Avinash",
     age: 22,
   };
   let newArr = [1, 2, 3];
  let myDetails = {
    userName: "Avinash",
    age: 21,
    profile: "Github",
  };
  return (
    <>
      <h1 className="bg-green-400 mb-4 text-center text-2xl text-white">
        Props Concept
      </h1>
      { <Props channel="chaiaurcode" SomeObj={myObj} someArray={newArr} /> }
      <Props
        username={myDetails.userName}
        userAge={myDetails.age}
        userProfile={myDetails.profile}
      />
    </>
  );
 
```
