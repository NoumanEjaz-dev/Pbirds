import ChartistGraph from "react-chartist";
import Chartist from "chartist";

const ChartGraph = () => {
  var delays = 80,
    durations = 500;

  const dailySalesChart = {
    data: {
      labels:
        window.document.body.offsetWidth >= "627"
          ? [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]
          : ["J", "F", "M", "A", "M", "J", "F", "A", "S", "O", "N", "D"],
      series: [[12, 17, 7, 17, 23, 18, 38, 5, 10, 16, 7]],
    },
    options: {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    // for animation
    animation: {
      draw: function (data) {
        if (data.type === "line" || data.type === "area") {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path
                .clone()
                .scale(1, 0)
                .translate(0, data.chartRect.height())
                .stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint,
            },
          });
        } else if (data.type === "point") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: "ease",
            },
          });
        }
      },
    },
  };

  return (
    <div style={{ background: "#111111" }}>
      <ChartistGraph
        className="ct-chart"
        data={dailySalesChart.data}
        type="Line"
        options={dailySalesChart.options}
        listener={dailySalesChart.animation}
      />
    </div>
  );
};

export default ChartGraph;
