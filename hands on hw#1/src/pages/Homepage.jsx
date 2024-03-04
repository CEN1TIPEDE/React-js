import React, { useState } from "react"; // Importing React and useState hook
import { Box } from "@mui/material"; // Importing Box component from Material-UI
import DepositCard from ".../components/HomePage/DepositCard"; // Importing DepositCard component
import OptionCard from ".../components/HomePage/OptionCard"; // Importing OptionCard component
import WithdrawCard from ".../components/HomePage/WithdrawCard"; // Importing WithdrawCard component
import TransferCard from ".../components/HomePage/TransferCard"; // Importing TransferCard component

function Homepage() { // Defining a functional component named Homepage
  const [transactionType, setTransactionType] = useState("Deposit"); // State variable for transaction type, initialized with "Deposit"

  const onOptionChange = (type) => { // Function to handle option change
    setTransactionType(type); // Setting the transaction type based on the selected option
  };

  const handleWithdraw = async (amount, note) => { // Function to handle withdrawal
    console.log("Withdraw:", amount, note); // Simulated handleWithdraw function
  };

  const handleTransfer = async (amount, note, receiver) => { // Function to handle transfer
    console.log("Transfer:", amount, note, receiver); // Simulated handleTransfer function
  };

  const handleDeposit = async (amount, note) => { // Function to handle deposit
    console.log("Deposit:", amount, note); // Simulated handleDeposit function
  };

  return (
    <>
      <Box
        sx={{
          width: { md: 600, xs: "90%" }, // Setting width based on screen size breakpoints
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          gap: 4, // Setting gap between child components
          p: { md: 0, xs: 2 }, // Setting padding based on screen size breakpoints
          margin: 7, // Setting margin
        }}
      >
        {/* Rendering the appropriate card based on the transaction type */}
        {transactionType === "Deposit" ? (
          <DepositCard submit={handleDeposit} />
        ) : transactionType === "Withdraw" ? (
          <WithdrawCard submit={handleWithdraw} />
        ) : transactionType === "Transfer" ? (
          <TransferCard submit={handleTransfer} />
        ) : (
          <DepositCard submit={handleDeposit} /> // Defaulting to DepositCard
        )}

        <OptionCard option={onOptionChange} /> {/* Rendering the OptionCard component */}
      </Box>

      {/* Additional Box component */}
      <Box
        sx={{
          width: { md: 600, xs: "90%" },
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          gap: 4,
          p: { md: 0, xs: 2 },
        }}
      >
        "Hello, World!" {/* Placeholder text */}
      </Box>
    </>
  );
}

export default Homepage; // Exporting the Homepage component