import React, { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CloseIcon from "@mui/icons-material/Close";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const countries = [
  {
    value: "USA",
    label: "USA"
  },
  {
    value: "EUR",
    label: "EUR"
  },
  {
    value: "BTC",
    label: "BTC"
  },
  {
    value: "JPY",
    label: "JPY"
  }
];

const ConvertModal = ({ loading, onClose, selectedFiles, showModal }) => {
  const [values, setValues] = useState({
    shipping: "Cat in the Hat",
    country: "",
    city: "",
    state: "",
    postalCode: "",
    address: ""
  });

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={showModal !== ""}
      onClose={() => onClose("")}
      sx={{ flexGrow: 1 }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <Grid container>
          <Grid item xs={8}>
            <Grid
              container
              direction="row"
              sx={{
                backgroundColor: "rgb(90, 90, 90)",
                padding: 3,
                alignItems: "center"
              }}
            >
              <Grid item xs={8}>
                <Typography variant="h5">Convert Files</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={1} sx={{ padding: 4 }}>
              <Grid item xs={10}>
                <TextField
                  style={{ marginBottom: 2 }}
                  fullWidth
                  select
                  margin="dense"
                  variant="outlined"
                  label="Shipping Presets"
                  defaultValue="None"
                  id="shipping-presets"
                >
                  <MenuItem>None Present</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  style={{ marginTop: 2 }}
                  label="Country"
                  fullWidth
                  select
                  variant="outlined"
                  value={values.country}
                  id="country"
                  margin="dense"
                  helperText="Please select your country"
                >
                  {countries.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="City"
                  id="city"
                />
              </Grid>
              <Grid item xs={7}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="State/Province"
                  id="state-province"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  label="Postal Code"
                  id="postal-code"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Street Address"
                  id="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  multiline
                  rows="5"
                  variant="outlined"
                  label="Additional Info"
                  id="additional-info"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            item
            xs={4}
            sx={{
              backgroundColor: "rgb(90, 90, 90)",
              padding: "2px 2.5px"
            }}
          >
            <Grid item xs={1.3} align="right" sx={{
              padding: "0px 0px"
            }}>
              <IconButton
                align="right"
                aria-label="Close"
                color="inherit"
                edge="start"
                onClick={() => onClose("")}
                style={{ padding: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Divider />
            <Grid item xs={1} align="center" sx={{
              backgroundColor: "rgb(120, 120, 120)",
              paddingTop: "5%"
            }}>
              <Typography variant="h5">Information</Typography>
            </Grid>
            <Divider />
            <Grid
              container
              item
              xs={0.5}
              sx={{ paddingTop: "4%"}}
            >
              <Grid item xs={9}>
                <Typography sx={{
                  padding: "2px",
                  pl: 2
                }}>
                  Action:
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography sx={{
                  padding: "2px"
                }}>
                  {"Convert"}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={0.5}>
              <Grid item xs={11}>
                <Typography sx={{
                  padding: "2px",
                  pl: 2
                }}>
                  File amount:
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{
                  padding: "2px"
                }}>
                  {"0" || selectedFiles.length}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={0.5}>
              <Grid item xs={6}>
                <Typography sx={{
                  padding: "2px",
                  pl: 2
                }}>
                  Current File:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Tooltip title="BW_AP_Test_File.troybin" arrow placement="right" >
                  <Typography sx={{
                    maxWidth: 140,
                    overflow: "hidden",
                    padding: "2px",
                    textOverflow: "ellipsis"
                  }}>
                    {"BW_AP_Test_File.troybin"}
                  </Typography>
                </Tooltip>
              </Grid>
            </Grid>
            <Grid container item xs={6.5} />
            <Divider />
            <Grid
              container
              item
              xs={0.5}
            >
              <Grid
                container
                item
                alignItems="center"
                justifyContent="space-around"
              >
                <Grid item xs={6}>
                  <Button variant="outlined" startIcon={<ArrowBackIcon />}>
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6} >
                  <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                    Next
                  </Button>
                </Grid>
                <Grid item xs={12} sx={{ ml: true ? "22%" : "16%" }} >
                  <Button
                    disabled={false}
                    startIcon={true ? <CircularProgress size={20}/> : <AutoFixHighIcon />}
                    sx={{ backgroundColor: "rgb(60, 60, 60)" }}
                    variant="outlined"
                  >
                    {true ? "Converting..." : "Start Converting"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default ConvertModal;
