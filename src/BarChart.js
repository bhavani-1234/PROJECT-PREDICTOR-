import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart({ data, handleClose }) {
  const firstObj = data[0];
  const key = Object.keys(firstObj)[0] || "name";
  const value = Object.keys(firstObj)[1] || "value";
	return (
		<div className="App">
			<h1>EMPLOYEES BAR CHART</h1>
			<div style={{ maxWidth: "650px" }}>
				<Bar
					data={{
						labels: [...data.map((item) => item[key])],
						datasets: [
							{
								label: `${key} vs ${value}`,
								data: [...data.map((item) => item[value])],
								backgroundColor: [],
								borderColor: [...data.map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`)],
								borderWidth: 0.5,
							},
						],
					}}
					height={400}
					options={{
						maintainAspectRatio: false,
						scales: {
							y: {
								beginAtZero: true,
							},
						},
						plugins: {
							legend: {
								labels: {
									fontSize: 15,
								},
							},
						},
					}}
				/>
			</div>
      <button onClick={handleClose} style={{ marginBottom: "20px" }}>
        Close Chart
      </button>
		</div>
	);
}

export default BarChart;
