import { ResponsivePie } from "@nivo/pie";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const PieChart = () => {
  let data = [
    {
      id: "products",
      label: "products",
      value: 537,
      color: "hsl(209, 70%, 50%)",
    },
    {
      id: "stylus",
      label: "stylus",
      value: 370,
      color: "hsl(360, 70%, 50%)",
    },
  ];
  return (
    <>
      <div style={{ height: 250 }}>
        <ResponsivePie
          data={data}
          margin={{ top: 40, bottom: 40}}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor="black"
          enableArcLinkLabels={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          enableArcLabels={false}
          arcLabelsRadiusOffset={1.4}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", "0"]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "products",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
          ]}
        />
      </div>
    </>
  );
};
export default PieChart;
