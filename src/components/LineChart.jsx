import React from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import moment from "moment";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    const time = new Date(
      moment.unix(coinHistory?.data?.history[i].timestamp)
    ).toLocaleDateString();
    coinTimestamp.push(time);
  }

  //   for (let i = 0; i < temp.length; i += 1) {
  //     coinTimestamp.push(temp[-1]);
  //     temp.pop();
  //   }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: true,
        backgroundColor: "#ad77ca",
        borderColor: "#3faaf3",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],

      //   xAxes: [
      //     {
      //       stacked: false,

      //       ticks: {
      //         fontColor: "#32ad44",
      //         fontSize: 20,
      //         min: 0,
      //       },
      //     },
      //   ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Chart type="line" data={data} options={options} />
    </>
  );
};

export default LineChart;
