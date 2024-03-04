import * as React from 'react';
import { Box, Avatar, Typography, IconButton } from "@mui/material"; // Importing necessary components from Material-UI
import Deposit from "./../../assets/images/Deposit.png"; // Importing image for Deposit option
import Transfer from "./../../assets/images/Transfer.png"; // Importing image for Transfer option
import Withdraw from "./../../assets/images/Withdraw.png"; // Importing image for Withdraw option

function OptionCard({option}) { // Defining a functional component named OptionCard which takes a prop named option

  // Function to handle option click
  const onOptionClick = (x) => {
    option(x);
  }

  return (
    <>
      <React.Fragment>
        <Box
          sx={{
            width: { md: 600, xs: "100%" }, // Setting width based on screen size breakpoints
            borderRadius: 5, // Setting border radius
            boxShadow: 10, // Setting box shadow
          }}
        >
          <Box
            sx={{
              height: 220, // Setting fixed height
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              gap: 4, // Setting gap between elements
            }}
          >
            {/* Typography for title */}
            <Typography variant="h4" style={{ fontWeight: 600 }} sx={{ pl: 4 }}> 
              Options
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              {/* IconButton for Deposit option */}
              <IconButton onClick={() => onOptionClick('Deposit')} sx={{ borderRadius: 5 }}> 
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Avatar for image */}
                  <Avatar src={Deposit} /> 
                  {/* Typography for Deposit label */}
                  <Typography variant="h5" style={{ fontWeight: 600 }}>
                    Deposit
                  </Typography>
                </Box>
              </IconButton>

              {/* Similar structure for Transfer and Withdraw options */}
              <IconButton onClick={() => onOptionClick('Transfer')} sx={{ borderRadius: 5 }}> 
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar src={Transfer} />
                  <Typography variant="h5" style={{ fontWeight: 600 }}>
                    Transfer
                  </Typography>
                </Box>
              </IconButton>

              <IconButton onClick={() => onOptionClick('Withdraw')} sx={{ borderRadius: 5 }}> 
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar src={Withdraw} />
                  <Typography variant="h5" style={{ fontWeight: 600 }}>
                    Withdraw
                  </Typography>
                </Box>
              </IconButton>           
            </Box>
          </Box>
        </Box>
      </React.Fragment>
    </>
  );
}

export default OptionCard;