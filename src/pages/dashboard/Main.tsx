import React from "react"
import {Page} from "~components/."

import {Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler} from "chart.js"

import {Line} from "react-chartjs-2"

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: [2, 40, 59],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
}

const Main: React.FC = () => {
  return (
    <Page title="Главная">
      <p className="headline sm:mt-5 lg:mt-10">Главная</p>
      {/* <div>
        <Line className="mt-5" options={options} data={data} />
      </div> */}
    </Page>
  )
}

export default Main
