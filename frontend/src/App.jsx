import cors from "cors";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let data = await fetch("http://localhost:3000/admin");
      data = await data.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return <div>"Hello World!"</div>;
}
