import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface State {
  options: any;
  series: any;
}

class DonutChart extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      series: [60, 27, 13],
      options: {
        chart: {
          width: 500,
          height: 700,
          type: 'donut',
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: false,
          },
          animations: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: '80%',
            },
          },
        },
        colors: ['#005cbf', '#4CAF50', '#03A9F4'], // Utiliser les couleurs verte, bleu ciel et violet
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          position: 'bottom',
          offsetY: 0,
          height: 100,
          formatter: function (seriesName: any, opts: any) {
            return seriesName + ': ' + opts.w.globals.series[opts.seriesIndex];
          },
        },
        title: {
          text: 'Revenue Source',
          align: 'left',
          marginTop: 4,
          marginBottom: 10,
          style: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#263238',
          },
        },
        labels: ['Direct', 'Social', 'Referal'],
      },
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className="chart-wrap" style={{ marginTop: '20px' }}>
            <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={600} />
            </div>
          </div>
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default DonutChart;
