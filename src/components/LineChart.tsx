import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface State {
  options: any;
  series: any;
}

class LineChart extends React.Component<any, State> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Dollars',
          data: [0, 10000, 5000, 20000, 7000, 30000],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        title: {
          text: 'Earning overview',
          align: 'left',
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.2,
          },
        },
        xaxis: {
          categories: ['Jan', 'Mar', 'May', 'Jul', 'Sep'],
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={400} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default LineChart;
