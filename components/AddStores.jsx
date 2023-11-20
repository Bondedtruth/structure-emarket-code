import React, { useRef, useState } from 'react';
import './colors.css';
import { Link } from 'react-router-dom';

const AddStores = () => {
  const list = [
    {
      id: 1,
      name: 'Surulere Market',
      desc: 'cooking oil',
      MarketID: 111,
    },
    {
      id: 2,
      name: 'Oshodi Market',
      desc: 'cooking oil',
      MarketID: 112,
    },
    {
      id: 3,
      name: 'Oyingbo Market',
      desc: 'dry fish',
      MarketID: 113,
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
                      <td>{current.desc}</td>
                      <td>{current.marketID}</td>
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
            <div className="mt-8  text-[#FFF]">
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
    const desc = event.target.elements.desc.value;
    const marketID = event.target.elements.marketID.value;
    const newlist = lists.map((li) =>
      li.id === updateState
        ? { ...li, name: name, desc: desc, marketID: marketID }
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
  function handInputdesc(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, desc: value } : li
    );

    setList(newlist);
  }
  function handInputmarketID(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, marketID: value } : li
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
          onChange={handInputdesc}
          name="desc"
          value={current.desc}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handInputmarketID}
          name="marketID"
          value={current.marketID}
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
  const descRef = useRef();
  const marketIDRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.element.name.value;
    const desc = event.target.element.desc.value;
    const marketID = event.target.element.marketID.value;
    const newlist = {
      id: 4,
      name,
      desc,
      marketID,
    };
    setList((prevList) => {
      return prevList.concat(newlist);
    });
    nameRef.current.value = '';
    descRef.current.value = '';
    marketIDRef.current.value = '';
  }
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
      <input type="text" name="desc" placeholder="Enter desc" ref={descRef} />
      <input
        type="text"
        name="marketID"
        placeholder="market ID"
        ref={marketIDRef}
      />
      <button type="submit" className="button">
        Add +
      </button>
    </form>
  );
}

export default AddStores;
