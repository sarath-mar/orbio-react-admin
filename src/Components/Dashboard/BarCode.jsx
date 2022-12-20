import { ResponsiveBar } from "@nivo/bar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const BarCode = () => {
  let data = [
    {
      "country": "AD",
      "hot dog": 153,
    //   "hot dogColor": "hsl(170, 70%, 50%)",
      "burger": 86,
      "burgerColor": "hsl(66, 70%, 50%)",
      "sandwich": 137,
      "sandwichColor": "hsl(146, 70%, 50%)",
    },
    {
      "country": "AE",
      "hot dog": 65,
    //   "hot dogColor": "hsl(6, 70%, 50%)",
      "burger": 24,
      "burgerColor": "hsl(266, 70%, 50%)",
      "sandwich": 136,
      "sandwichColor": "hsl(1, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 27,
    //   "hot dogColor": "hsl(183, 70%, 50%)",
      "burger": 175,
      "burgerColor": "hsl(329, 70%, 50%)",
      "sandwich": 22,
      "sandwichColor": "hsl(78, 70%, 50%)",
    },
    {
      "country": "AG",
      "hot dog": 33,
    //   "hot dogColor": "hsl(83, 70%, 50%)",
      "burger": 113,
      "burgerColor": "hsl(210, 70%, 50%)",
      "sandwich": 183,
      "sandwichColor": "hsl(241, 70%, 50%)",
    },
    {
      "country": "AI",
      "hot dog": 17,
    //   "hot dogColor": "hsl(197, 70%, 50%)",
      "burger": 94,
      "burgerColor": "hsl(224, 70%, 50%)",
      "sandwich": 131,
      "sandwichColor": "hsl(293, 70%, 50%)",
    },
    {
      "country": "AL",
      "hot dog": 164,
    //   "hot dogColor": "hsl(191, 70%, 50%)",
      "burger": 41,
      "burgerColor": "hsl(340, 70%, 50%)",
      "sandwich": 95,
      "sandwichColor": "hsl(9, 70%, 50%)",
    },
    {
      "country": "AM",
      "hot dog": 64,
    //   "hot dogColor": "hsl(155, 70%, 50%)",
      "burger": 51,
      "burgerColor": "hsl(309, 70%, 50%)",
      "sandwich": 76,
      "sandwichColor": "hsl(180, 70%, 50%)",
    }
  ]
  return (
    <div style={{ height: 400 }}>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.2}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "white",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="white"
        legends={[
          {
            dataFrom: "keys",
            anchor: "top-right",
            direction: "row",
            justify: false,
            translateX: 63,
            translateY: -44,
            itemsSpacing: 2,
            itemWidth: 69,
            itemHeight: 26,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return (
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          );
        }}
      />
    </div>
  );
};
export default BarCode;
