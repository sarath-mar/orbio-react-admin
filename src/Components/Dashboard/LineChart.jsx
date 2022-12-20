import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const LineChart = () => {
  let data = [
    {
      id: "japan",
      color: "hsl(222, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 13,
        },
        {
          x: "helicopter",
          y: 137,
        },
        {
          x: "boat",
          y: 146,
        },
        {
          x: "train",
          y: 194,
        },
        {
          x: "subway",
          y: 245,
        },
        {
          x: "bus",
          y: 125,
        },
        {
          x: "car",
          y: 219,
        },
        {
          x: "moto",
          y: 189,
        },
        {
          x: "bicycle",
          y: 81,
        },
        {
          x: "horse",
          y: 273,
        },
        {
          x: "skateboard",
          y: 182,
        },
        {
          x: "others",
          y: 112,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(301, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 53,
        },
        {
          x: "helicopter",
          y: 175,
        },
        {
          x: "boat",
          y: 134,
        },
        {
          x: "train",
          y: 53,
        },
        {
          x: "subway",
          y: 220,
        },
        {
          x: "bus",
          y: 288,
        },
        {
          x: "car",
          y: 156,
        },
        {
          x: "moto",
          y: 6,
        },
        {
          x: "bicycle",
          y: 297,
        },
        {
          x: "horse",
          y: 103,
        },
        {
          x: "skateboard",
          y: 283,
        },
        {
          x: "others",
          y: 153,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(307, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 25,
        },
        {
          x: "helicopter",
          y: 111,
        },
        {
          x: "boat",
          y: 15,
        },
        {
          x: "train",
          y: 68,
        },
        {
          x: "subway",
          y: 226,
        },
        {
          x: "bus",
          y: 236,
        },
        {
          x: "car",
          y: 110,
        },
        {
          x: "moto",
          y: 280,
        },
        {
          x: "bicycle",
          y: 278,
        },
        {
          x: "horse",
          y: 243,
        },
        {
          x: "skateboard",
          y: 245,
        },
        {
          x: "others",
          y: 161,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(290, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 270,
        },
        {
          x: "helicopter",
          y: 239,
        },
        {
          x: "boat",
          y: 77,
        },
        {
          x: "train",
          y: 39,
        },
        {
          x: "subway",
          y: 46,
        },
        {
          x: "bus",
          y: 149,
        },
        {
          x: "car",
          y: 94,
        },
        {
          x: "moto",
          y: 88,
        },
        {
          x: "bicycle",
          y: 112,
        },
        {
          x: "horse",
          y: 47,
        },
        {
          x: "skateboard",
          y: 51,
        },
        {
          x: "others",
          y: 87,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(324, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 239,
        },
        {
          x: "helicopter",
          y: 222,
        },
        {
          x: "boat",
          y: 61,
        },
        {
          x: "train",
          y: 3,
        },
        {
          x: "subway",
          y: 211,
        },
        {
          x: "bus",
          y: 164,
        },
        {
          x: "car",
          y: 227,
        },
        {
          x: "moto",
          y: 246,
        },
        {
          x: "bicycle",
          y: 35,
        },
        {
          x: "horse",
          y: 75,
        },
        {
          x: "skateboard",
          y: 236,
        },
        {
          x: "others",
          y: 231,
        },
      ],
    },
  ];
  return (
    <div style={{ height: 400 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};
export default LineChart;
