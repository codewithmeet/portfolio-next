import React from "react";
import { Triangle } from "react-loader-spinner";

export const LoadingScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",

        margin: "auto",
      }}
    >
      <Triangle
        height="80"
        width="80"
        color="#fc5158"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
