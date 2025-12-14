import React from "react";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-indigo-600">
              Json Placeholder User
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-24 md:py-28">
        <UserList />
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3 text-center text-sm text-gray-600">
          <p>
            Checkpoint Project – API Integration, built with React & Tailwind
            CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
