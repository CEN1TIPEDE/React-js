import { Button, Box, TextField, Typography } from "@mui/material"; // Importing necessary components from Material-UI
import { useState } from "react"; // Importing useState hook from React

function WithdrawCard({submit}) { // Defining a functional component named WithdrawCard which takes a prop named submit
  
  // State variables for transaction amount and note, initialized with default values
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionNote, setTransactionNote] = useState("");
    
  // Function to handle form submission
  const onSubmit = (amount, note) => {
    try {
      console.log(amount);
      console.log(note);
      // Calling the submit function passed as prop with transaction details
      submit(Number(amount), note);
      console.log('success');
    } catch(err) {
      console.log(err)
    }
  }

  // Inline styling for body of the card
  const bodyStyle = {
    display: "flex",
    width: "50%",
    height: 530,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  };

  // Inline styling for input fields
  const inputStyle = {
    display: "flex",
    width: "100%",
    height: "20%",
    alignItems: "flex-start",
    flexDirection: "column",
  };

  return (
    <>
      {/* Outer Box component for styling */}
      <Box
        sx={{
          width: { md: 600, xs: "100%" },
          display: "flex",
          justifyContent: "center",
          borderRadius: 5,
          boxShadow: 10,
          mt: { md: 0, xs: 10 },
        }}
      >
        {/* Inner Box component for body of the card */}
        <Box style={bodyStyle}>
          {/* Typography component for title */}
          <Typography
            style={{ fontWeight: 600 }}
            sx={{
              typography: { xs: "h3" },
              color: "#2F69D9",
              mb: "5%",
            }}
          >
            Withdraw
          </Typography>

          {/* Box for amount input */}
          <Box style={inputStyle}>
            {/* Typography for amount label */}
            <Typography
              sx={{
                mb: "5%",
                typography: { md: "h5", xs: "subtitle1" },
              }}
            >
              Amount
            </Typography>

            {/* TextField for amount input */}
            <TextField
              onChange={(e) => {
                setTransactionAmount(e.target.value)
                console.log(transactionAmount)}}
              sx={{ width: "100%" }}
              type="number"
              required
              id="outlined-required"
              placeholder="0.00"
            />
          </Box>

          {/* Box for note input */}
          <Box style={inputStyle}>
            {/* Typography for note label */}
            <Typography
              variant="h5"
              sx={{
                mb: "5%",
                typography: { md: "h5", xs: "subtitle1" },
              }}
            >
              Note {"(optional)"}
            </Typography>

            {/* TextField for note input */}
            <TextField
              onChange={(e) => setTransactionNote(e.target.value)}
              sx={{ width: "100%" }}
              id="outlined-required"
            />
          </Box>

          {/* Button for form submission */}
          <Button 
            onClick={() => onSubmit(transactionAmount,transactionNote)}
            variant="contained" 
            sx={{ width: "100%", height: 50 }}
            >
            {/* Typography for button label */}
            <Typography
              sx={{
                typography: { md: "h5", xs: "subtitle1" },
              }}
            >
              Withdraw
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}
export default WithdrawCard;