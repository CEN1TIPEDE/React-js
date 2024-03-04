import { Box, Typography } from "@mui/material"; // Importing necessary components from Material-UI

function TransactionList({ amount, date, type }) { // Defining a functional component named TransactionList which takes props amount, date, and type
  // Converting date string to Date object
  const x = new Date(date);
  // Extracting date and time from the Date object
  const strDate = x.toUTCString(); 
  const transDate =  strDate.slice(5, 16); // Extracting date portion
  const transTime = strDate.slice(17, 25); // Extracting time portion

  return (
    <>
      {/* Outer Box component for styling */}
      <Box
        sx={{
          width: "100%", // Setting width to 100%
          display: "flex",
          flexDirection: "column",
          gap: 2, // Setting gap between elements
        }}
      >
        {/* Inner Box component */}
        <Box
          sx={{
            width: "100%", // Setting width to 100%
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {/* Left section for transaction type and amount */}
          <Box
            sx={{
              width: "100%", // Setting width to 100%
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            {/* Typography for transaction type */}
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 600,
                // Setting color based on transaction type
                color: (type === "deposit") ? "#10C700" : 
                       (type === "withdraw") ? "#ED4141" : 
                       "#2F69D9" 
              }}
            >
              {type}
            </Typography>
            {/* Typography for transaction amount */}
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {new Intl.NumberFormat().format(amount)} THB
            </Typography>
          </Box>

          {/* Right section for transaction date and time */}
          <Box
            sx={{
              width: 100, // Setting width to 100px
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "end",
            }}
          >
            {/* Typography for transaction date */}
            <Typography variant="h6" style={{ fontWeight: 600 }}>
              {transDate}
            </Typography>
            {/* Typography for transaction time */}
            <Typography variant="h6" style={{ fontWeight: 600 }}>
              {transTime}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TransactionList; // Exporting the TransactionList component