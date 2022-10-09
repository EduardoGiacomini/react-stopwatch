import React from "react";
import { useStopWatch } from "./useStopWatch";

export function StopWatch(): React.ReactElement {
  const time = useStopWatch(60 * 60);

  return <h1>{time}</h1>;
}
