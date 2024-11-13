export function pro(dispatch) {
  return async () => {
    let data = await fetch("https://fakestoreapi.com/products");

    let newData = await data.json();

    console.log(newData);

    return {
      type: "pro",
      payload: newData,
    };
  };
}
