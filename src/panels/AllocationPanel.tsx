import React from "react";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartTitle,
  ChartTooltip,
} from "@progress/kendo-react-charts";

import { getFundAllocation } from "../services/dataService";
import Loading from "../layout/Loading";
import { Allocation } from "../data/models";

export default function AllocationPanel() {
  const [data, setData] = React.useState<Allocation[]>();
  React.useEffect(() => {
    getFundAllocation().then((data: Allocation[]) => {
      setData(data);
    });
  }, []);

  return (
    <>
      {!data && <Loading />}
      <Chart style={{ opacity: data ? "1" : "0" }}>
        <ChartTitle text={"Pie chart"}></ChartTitle>
        <ChartSeries>
          <ChartSeriesItem type="donut" data={data}>
            <ChartSeriesLabels
              content={(e: any) => `${e.value}%`}
              background="none"
              color="#fff"
            />
          </ChartSeriesItem>
        </ChartSeries>
        <ChartLegend position={"bottom"} visible={true} />
        <ChartTooltip
          render={(e: any) => {
            return <div>{e.point ? e.point.category : ""}</div>;
          }}
        />
      </Chart>
    </>
  );
}
