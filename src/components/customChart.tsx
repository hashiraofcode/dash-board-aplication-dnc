import { useTheme } from 'styled-components'
import { type CustomChartProps } from '@/types/index.ts'
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
  plugins,
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
  plugins,
)

const CustomChart = (graphieProps: CustomChartProps) => {
  const { labels, type, data } = graphieProps
  const theme = useTheme()
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        ticks: {
          color: theme.typographies.subtitle,
        },
        grid: {
          display: false,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          color: theme.appDefaultStroke,
        },
        ticks: {
          color: theme.typographies.subtitle,
        },
      },
    },
  }
  const chartData = {
    labels,
    datasets: [
      {
        data: data,
        borderColor: 'rgb(12,112,247)',
        backgroundColor: 'rgb(12,112,247)',
      },
    ],
  }

  return type === 'bar' ? (
    <Bar options={options} data={chartData} />
  ) : (
    <Line options={options} data={chartData} />
  )
}

export default CustomChart
