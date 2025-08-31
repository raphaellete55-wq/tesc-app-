Great question 👌 — the code is the starter TESC app I gave you earlier. That’s what you need to paste into the editor after naming your file app/page.js.

Here it is again (so you don’t have to scroll up):

import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
          <h1 className="text-2xl font-bold text-center mb-4">TESC Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">TESC Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-semibold">Teachers</h2>
          <p>Name, time arrived, classes handled...</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-semibold">Students</h2>
          <p>Present, absent, paid, unpaid, advance...</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-semibold">Administration</h2>
          <p>Branches, proprietor notes, concerns...</p>
        </div>
      </div>
    </div>
  );
}


---

👉 Steps for you now:

1. In GitHub, name your file → app/page.js


2. Paste the above code into the editor box.


3. Scroll down and click Commit new file.



After this, your repo will contain your first working page 🎉

Do you want me to give you the package.json file code next (so Vercel knows this is a Next.js app)?

