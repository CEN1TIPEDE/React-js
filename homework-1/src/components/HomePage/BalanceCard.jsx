import { Box, Typography } from "@mui/material"; // Importing necessary components from Material-UI
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"; // Importing AccountBalanceWalletIcon

function BalanceCard({ balance }) { // Defining a functional component named BalanceCard which takes a prop named balance
  return (
    <>
      {/* Outer Box component for styling */}
      <Box
        sx={{
          width: { md: 500, xs: "100%" }, // Setting width based on screen size breakpoints
          height: 225, // Setting height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 5, // Setting border radius
          boxShadow: 10, // Setting box shadow
          py: { md: 0, xs: 2 }, // Setting padding on y-axis based on screen size breakpoints
          color: "white", // Setting text color
          backgroundColor: "#2F69D9", // Setting background color
        }}
      >
        {/* Inner Box component for layout */}
        <Box
          sx={{
            width: { md: 500, xs: "100%" },
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "start",
            p: { md: 0, xs: 2 }, // Setting padding based on screen size breakpoints
          }}
        >
          {/* Left section for balance information */}
          <Box
            sx={{
              width: 350, // Setting width
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              gap: 1, // Setting gap between elements
            }}
          >
            {/* Typography for balance title with icon */}
            <Typography variant="h5" style={{ fontWeight: 600 }}>
              <AccountBalanceWalletIcon /> Balance
            </Typography>

            {/* Typography for account information */}
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              My Account
            </Typography>

            {/* Typography for account number */}
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              XXX-X-X3154-X
            </Typography>

            {/* Typography for balance amount */}
            <Typography variant="h4" style={{ fontWeight: 600 }}>
              {new Intl.NumberFormat().format(balance)} THB
            </Typography>
          </Box>

          {/* Right section for saving account */}
          <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
            KBUG Saving
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default BalanceCard; // Exporting the BalanceCard component