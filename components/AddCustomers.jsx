import React, { useRef, useState } from 'react';
import './colors.css';
import { Link } from 'react-router-dom';

const AddCustomers = () => {
  const list = [
    {
      id: 1,
      name: 'Mike',
      amount: 5000,
      walletID: 1111,
    },
    {
      id: 2,
      name: 'James',
      amount: 3000,
      walletID: 1112,
    },
    {
      id: 3,
      name: 'John',
      amount: 10000,
      walletID: 1113,
    },
  ];
  const [lists, setList] = useState(list);
  const [updateState, setUpdateState] = useState(-1);
  return (
    <div className="flex justify-center align-center w-[615px] lg:w-[100%] sm:w-[1200px] mx-auto h-[100vh] bg-gray-500/100 py-2">
      <div className="w-[615px] sm:w-[750px] lg:w-[900px] mx-auto h-[70vh]  p-1 m-12 z-10 rounded-2xl text-[#FFF] bg-blue-900">
        <div className="crud">
          <div>
            <AddList setList={setList} />
            <form onSubmit={handleSubmit}>
              <table>
                {lists.map((current) =>
                  updateState === current.id ? (
                    <EditList
                      current={current}
                      lists={lists}
                      setList={setList}
                    />
                  ) : (
                    <tr>
                      <td>{current.name}</td>
                      <td>{current.amount}</td>
                      <td>{current.walletID}</td>
                      <td>
                        <button
                          className="edit"
                          onClick={() => handleEdit(current.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="delete"
                          type="button"
                          onClick={() => handleDelete(current.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </table>
            </form>
            <div className="mt-8 text-[#FFF]">
              <ul className="flex space-x-4 justify-center">
                <li className="cursor-pointer  py-2  px-4 hover:underline">
                  <Link Link to="/Customers">
                    go to customers page
                  </Link>
                </li>
                <li className="cursor-pointer  py-2  px-4 hover:text-yellow-500 hover:underline">
                  <Link to="/">go back to home</Link>
                </li>
                <li className="cursor-pointer  py-2  px-4 hover:text-yellow-500 hover:underline">
                  <Link to="/Stores">go to stores page</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function handleEdit(id) {
    setUpdateState(id);
  }
  function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id);
    setList(newlist);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const amount = event.target.elements.amount.value;
    const walletID = event.target.elements.walletID.value;
    const newlist = lists.map((li) =>
      li.id === updateState
        ? { ...li, name: name, amount: amount, walletID: walletID }
        : li
    );

    setList(newlist);
    setUpdateState(-1);
  }
};

function EditList({ current, lists, setList }) {
  function handInputname(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, name: value } : li
    );

    setList(newlist);
  }
  function handInputamount(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, amount: value } : li
    );

    setList(newlist);
  }
  function handInputwalletID(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, walletID: value } : li
    );

    setList(newlist);
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handInputname}
          name="name"
          value={current.name}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handInputamount}
          name="amount"
          value={current.amount}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handInputwalletID}
          name="walletID"
          value={current.walletID}
        />
      </td>
      <td>
        <button type="submit" className="update">
          Update
        </button>
      </td>
    </tr>
  );
}

function AddList({ setList }) {
  const nameRef = useRef();
  const amountRef = useRef();
  const walletIDRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.element.name.value;
    const amount = event.target.element.amount.value;
    const walletID = event.target.element.walletID.value;
    const newlist = {
      id: 4,
      name,
      amount,
      walletID,
    };
    setList((prevList) => {
      return prevList.concat(newlist);
    });
    nameRef.current.value = '';
    amountRef.current.value = '';
    walletIDRef.current.value = '';
  }
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
      <input
        type="text"
        name="amount"
        placeholder="Enter Amount"
        ref={amountRef}
      />
      <input
        type="text"
        name="walletID"
        placeholder="Wallet ID"
        ref={walletIDRef}
      />
      <button type="submit" className="button">
        Add +
      </button>
    </form>
  );
}

export default AddCustomers;
