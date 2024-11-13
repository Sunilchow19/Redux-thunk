import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pro } from "../Redux/actions/action";

function Api() {
  let dispatch = useDispatch();
  let sel = useSelector((state) => {
    return state;
  });

  //   async function products() {
  //     let data = await fetch("https://fakestoreapi.com/products");

  //     let newData = await data.json();

  //     return newData;
  //   }

  useEffect(() => {
    // console.log(products());

    dispatch(pro(dispatch));

    console.log(sel.arr);
    // products().then((res) => {
    // //   console.log(res);
    // });
  }, []);

  let result = sel.arr.map((val, ind) => {
    return (
      <table key={ind}>
        <tbody>
          <tr>
            <td>{val.id}</td>
            <td>{val.title}</td>
            <td>{val.description}</td>
          </tr>
        </tbody>
      </table>
    );
  });

  return (
    <>
      <h1>API</h1>
      {sel.arr.length > 0 ? result : <h1>loading.....</h1>}
    </>
  );
}

export default Api;
