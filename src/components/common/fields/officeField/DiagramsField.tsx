'use client'

import { DoughnutChart } from "../../diagrams/DoughnutChart";

export type TColors = {
    color1: string
    color2: string
}

const COLORS: TColors[] = [
    {
        color1: 'rgba(229, 44, 49, 1)',
        color2: 'rgba(255, 201, 202, 0.38)'
    },
    {
        color1: 'rgba(243, 108, 33, 1)',
        color2: 'rgba(243, 108, 33, 0.18)'
    },
    {
        color1: 'rgba(249, 209, 0, 1)',
        color2: 'rgba(249, 209, 0, 0.18)'
    },
    {
        color1: 'rgba(53, 70, 195, 1)',
        color2: 'rgba(53, 70, 195, 0.21)'
    },
    {
        color1: 'rgba(75, 166, 3, 1)',
        color2: 'rgba(75, 166, 3, 0.21)'
    },
    {
        color1: 'rgba(151, 4, 136, 1)',
        color2: 'rgba(151, 4, 136, 0.21)'
    },
]

export default function DiagramsFieldOffice() {
    return (
        <div className="bg-white rounded-6 h-[732px] sx_lg:h-[944px] p-6 ">
            <h4 className="text-heading-ss-bold">
                Диаграммы отчёта
            </h4>

            <div className="w-full h-full grid grid-cols-2 gap-9">
                {
                    COLORS.map((e, index) => (
                        <DoughnutChart key={e.color2 + index} name={'Продуктивность'}
                            plugins={{
                                id: '80%',
                                //@ts-ignore
                                beforeDatasetDraw(chart, args, pluginOptions) {
                                    const { ctx, data } = chart;

                                    ctx.save();
                                    ctx.font = 'bolder 15px sans-serif';
                                    ctx.fillStyle = 'black';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText('text', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
                                }
                            }}
                            data={
                                {
                                    datasets: [
                                        {
                                            label: '%',
                                            data: [88, 12],
                                            backgroundColor: [
                                                e.color1,
                                                e.color2,
                                            ],
                                            borderColor: [
                                                e.color1,
                                                e.color2,
                                            ],
                                            borderWidth: 1,
                                            cutout: "80%"
                                        },
                                    ],
                                }
                            } />
                    ))
                }
            </div>
        </div>
    )
}