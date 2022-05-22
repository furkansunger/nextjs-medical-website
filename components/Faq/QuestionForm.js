import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  InputLabel,
  FormControl,
  InputBase,
  IconButton,
  Snackbar,
} from "@mui/material";
// import theme from "../theme";
import { styled } from "@mui/material/styles";
// import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";

export default function QuestionForm() {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [inputData, setInputData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  // ====== just For Test  =======
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        setOpenSnackbar(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [loading]);
  //=============================

  const handleSubmit = () => {
    setLoading(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    setOpenSnackbar(false);
  };
  const handleChange = (e) => {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        X
      </IconButton>
    </>
  );

  return (
    <Box
      className="centerXY"
      sx={{
        minWidth: { md: "270px", xs: "85%" },
        background: "rgb(205,174,20)",
        // background:
        //     "#a08275",
        borderRadius: "40px",
        padding: "40px  30px 10px 30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
        position: {
          md: "relative",
        },
        mt: {
          md: "none",
          xs: 5,
        },
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        fontWeight="bold"
        color="#fff"
        textAlign="center"
      >
        Send Your Question
      </Typography>
      <InputBox
        name="fullname"
        onChange={handleChange}
        value={inputData.fullname}
        lable="Full Name"
        required
      />
      <InputBox
        name="email"
        onChange={handleChange}
        value={inputData.email}
        lable="Email"
        required
      />
      <InputBox
        name="message"
        onChange={handleChange}
        value={inputData.message}
        lable="Your Message"
        required
        multiline
        rows={7}
      />
      <LoadingButton
        onClick={handleSubmit}
        // endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        sx={{
          display: "flex",
          margin: "auto",
          position: "relative",
          bottom: "-30px",
          fontSize: "1.3em",

          width: "80%",
          // maxWidth: "200px",
          borderRadius: "30px",
          boxShadow: "none",
          "&.Mui-disabled": {
            color: "rgba(0, 0, 0, 0.55) ",
            backgroundColor: "rgba(196, 196, 196, 0.98) !important",
            paddingX: "30px",
          },
        }}
      >
        Send
      </LoadingButton>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="message sent successfully"
        action={action}
      />
      {/* <TextField
        color="success"
        required
        label="Full Name"
        variant="standard"
        fullWidth
        // sx={{
        //   input: { color: "#fff" } ,
        // }}
      /> */}

      {/* <TextField required label="Email" variant="standard" fullWidth />
      <TextField required label="Your Message" multiline rows={4} /> */}
    </Box>
  );
}

const TextInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(4),
  },
  "& .MuiInputBase-input": {
    borderRadius: "20px",
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // "&:focus": {
    //   borderColor: theme.palette.third.dark,
    // },
  },
}));
const InputBox = ({ lable, multiline, required, rows, onChange, name }) => {
  return (
    <FormControl variant="standard" sx={{ width: "95%" }}>
      <InputLabel
        sx={{
          color: "rgb(255 255 255 / 80%)",
          fontSize: "1.3em",
          "&.Mui-focused": { color: "#fff" },
        }}
        shrink
        htmlFor="bootstrap-input"
      >
        {lable && lable}
      </InputLabel>
      <TextInput
        name={name}
        onChange={onChange}
        required
        multiline={multiline === true}
        rows={rows && rows}
      />
    </FormControl>
  );
};
