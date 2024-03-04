import { Box, Typography } from "@mui/material"; // Importing necessary components from Material-UI
import TransactionList from "./TransactionList"; // Importing TransactionList component
import { useState } from "react"; // Importing useState hook from React

const dummyTransactions = [ // Dummy transaction data
  { bank_id: 1, amount: 100, date: "2024-02-28", type: "Deposit" },
  { bank_id: 2, amount: 50, date: "2024-02-27", type: "Withdrawal" },
  { bank_id: 3, amount: 200, date: "2024-02-26", type: "Deposit" },
  { bank_id: 4, amount: 75, date: "2024-02-25", type: "Withdrawal" },
  { bank_id: 5, amount: 150, date: "2024-02-24", type: "Deposit" },
];

function TransactionCard() { // Defining a functional component named TransactionCard
  const [userDeposit, setUserDeposit] = useState(dummyTransactions); // State variable for user transactions, initialized with dummyTransactions

  return (
    <>
      {/* Outer Box component for styling */}
      <Box
        sx={{
          width: { md: 500, xs: "100%" }, // Setting width based on screen size breakpoints
          height: 525, // Setting height
          borderRadius: 5, // Setting border radius
          boxShadow: 10, // Setting box shadow
        }}
      >
        {/* Inner Box component */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            p: 5, // Setting padding
            gap: 4, // Setting gap between elements
          }}
        >
          {/* Typography for recent transactions title */}
          <Typography 
            variant="h4"
            style={{ fontWeight: 600 }}
          >
            Recent Transactions
          </Typography>

          {/* Box for displaying transaction list */}
          <Box
            sx={{
              width: "100%", // Setting width to 100%
              height: 350, // Setting height
              display: "flex",
              flexDirection: "column",
              whiteSpace: "nowrap",
              overflowY: "auto", // Adding vertical scroll if needed
              borderRadius: 2, // Setting border radius
              p: 1, // Setting padding
              gap: 3, // Setting gap between transactions
            }}
          >
            {/* Mapping over userDeposit array to render TransactionList for each transaction */}
            {userDeposit.map((transaction) => (
              <TransactionList 
                key={transaction.bank_id} // Unique key for each transaction
                amount={transaction.amount} // Transaction amount
                date={transaction.date} // Transaction date
                type={transaction.type} // Transaction type
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TransactionCard; // Exporting the TransactionCard component