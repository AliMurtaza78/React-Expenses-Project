import "./Chart.css"
import ChartBar from "./ChartBar"


const Chart = (props) =>{
    const dataPointValues = props.dataPoints.map(dataPoints => dataPoints.value)
    const totalmaximum = Math.max(...dataPointValues)
return(
    <div className="chart">
        {props.dataPoints.map((dataPoint) => (
            <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalmaximum}
            label={dataPoint.label}
            />
        ))}

    </div>
)
}

export default Chart