import React from "react";
import { Title as HeadTitle, Meta } from "react-head";

const Title = ({ title = "ChatHub", description = "this is ChatHub" }) => {
  return (
    <>
      <HeadTitle>{title}</HeadTitle>
      <Meta name="description" content={description} />
    </>
  );
};

export default Title;
