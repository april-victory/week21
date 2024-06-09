import "./App.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Увлечение", "Часть жизни"],
  ["Программирование", 9],
  ["Сноуборд", 12],
  ["Путешествия", 15],
  ["Творчество", 7],
  ["Кулинария", 5],
  ["Мода и стиль", 9],
];

export const options = {
  title: "Мои увлечения",
  is3D: true,
  colors: ["#ABDEE6", "#CBAACB", "#B6CFB6", "#FFCCB6", "#F770E5", "#79B8F4"],
  backgroundColor: "#F6A6FF",
  color: "#000000",
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"600px"}
      />
    </div>
  );
}

export default App;
