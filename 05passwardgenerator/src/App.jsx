import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook is used to take refrence of something , like in this program we take refrence of 'password' for copy.
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.select(0, 999); // Range on how much characters to copy.
    window.navigator.clipboard.writeText(password);
  }, [password]);

  (" Use Callback => This is a React Hook that lets you cache a function definition between re-renders. ");
  // Syntax => useCallback(function , Dependencies)

  // useCallback is not only used to run the function but mainly used to 'Memorise' , 'Optimise' and 'Store any change in values of Dependencies in Chache'.
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()-_+=[]{}~`";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char); // It is done to take Characters from String , because above line only gives the index value of the array.
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // useEffect is used to run the code.
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md round-lg px-4 py-7 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-center text-2xl my-5 text-white">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-5"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-4 py-0.5 shrink-0 hover:bg-blue-800">
            <i className="fa-regular fa-copy hover:text-lg transition-all-"></i>
          </button>
        </div>
        <div className="flex text-lg gap-x-5">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
