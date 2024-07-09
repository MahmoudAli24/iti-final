import { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Outlet />
    </Suspense>
  );
}

export default App;
