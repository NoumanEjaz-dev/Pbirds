import React from "react";
import MainCard from "../box/MainCard";
import Grid from "@material-ui/core/Grid";
import TextFieldBox from "../textField/TextFieldBox";

export default function TransferForm() {
  return (
    <>
      <Grid container>
        <Grid item xs={6} sm={3} lg={3}></Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <MainCard>
            <TextFieldBox />
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
}
