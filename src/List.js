function List() {
    const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
    return(
        <div></div>
    )
}

function ListRender() {
    const numbers = [1, 2, 3, 4, 5];
    return(
        <div>
         {numbers.map((number) =>
            <li>{number}</li>)
         }
    
        </div>
    )
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  function NumberListKey(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

export {List, ListRender, NumberList, NumberListKey}