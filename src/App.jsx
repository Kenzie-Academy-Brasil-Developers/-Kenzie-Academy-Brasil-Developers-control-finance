import { Header } from "./components/Header/index.jsx";
import { ResumeSection } from "./components/ResumeSection/index.jsx";
import { EntriesList } from "./components/EntriesList/index.jsx";
import "./styles/index.scss";
import { RegisterSection } from "./components/RegisterSection/index.jsx";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([
    {
      id: crypto.randomUUID,
      value: 90.0,
      categoryID: 0,
    },
    {
      id: crypto.randomUUID,
      value: 40.0,
      categoryID: 1,
    },
    {
      id: crypto.randomUUID,
      value: 15.5,
      categoryID: 0,
    },
  ]);

  const [type, setType] = useState("Todos");
  return (
    <>
      <Header />
      <RegisterSection entries={entries} setEntries={setEntries} />
      <ResumeSection setType={setType} />
      <EntriesList type={type} entries={entries} />
    </>
  );
}

export default App;
