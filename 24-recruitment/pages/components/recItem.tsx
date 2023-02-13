import React from "react";
type Props = {
  data: string;
};
export default function recItem(props: Props) {
  const { data } = props;
  return <div>{data}</div>;
}
