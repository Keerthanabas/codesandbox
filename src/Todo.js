import { useState } from "react";

const Add = () => {
  const data = ["milk", "Tea", "Coffee"];
  const [Todo, setTodo] = useState("");
  return (
    <div>
      <form>
        <table>
          <tbody>
            <tr>
              {" "}
              <td>
                {" "}
                <input
                  type="text"
                  onChange={(e) => setTodo(e.target.value)}
                />{" "}
              </td>
            </tr>
            <button>Add Items</button> <br></br>
            <input type="Radio" name="ingredient">
              {" "}
              Milk
            </input>{" "}
            <button>Delete</button> <br></br>
            <input type="Radio" name="ingredient">
              {" "}
              Tea <button>Delete</button>{" "}
            </input>{" "}
            <br></br>
            <input type="Radio" name="ingredient">
              {" "}
              Coffee <button>Delete</button>{" "}
            </input>
            {data.map((item, key) => {
              return <li key={key}>{item}</li>;
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};
export default Add;
