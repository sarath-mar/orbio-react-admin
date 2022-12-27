import { ResponsivePie } from '@nivo/pie'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
    {
        "id": "hack",
        "label": "hack",
        "value": 285,
        "color": "hsl(217, 70%, 50%)"
    },
    {
        "id": "c",
        "label": "c",
        "value": 585,
        "color": "hsl(95, 70%, 50%)"
    },
    {
        "id": "stylus",
        "label": "stylus",
        "value": 458,
        "color": "hsl(270, 70%, 50%)"
    },
    {
        "id": "go",
        "label": "go",
        "value": 2,
        "color": "hsl(108, 70%, 50%)"
    },
    {
        "id": "elixir",
        "label": "elixir",
        "value": 366,
        "color": "hsl(271, 70%, 50%)"
    }
]
const PieChartNew = () => (
    <div style={{ height: 400 }}>
        <ResponsivePie
            data={data}

            margin={{ top: 40, right: 30, bottom: 80, left: -60 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        '0.2'
                    ]
                ]
            }}
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsRadiusOffset={0.45}
            arcLabelsSkipAngle={14}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'ruby'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'c'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'go'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'python'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'scala'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'lisp'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'elixir'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'javascript'
                    },
                    id: 'lines'
                }
            ]}
            legends={[
                {
                    anchor: 'right',
                    direction: 'column',
                    justify: true,
                    translateX: -24,
                    translateY: 0,
                    itemWidth: 61,
                    itemHeight: 23,
                    itemsSpacing: 17,
                    symbolSize: 18,
                    itemDirection: 'left-to-right'
                }
            ]}
        />
    </div>
)
export default PieChartNew