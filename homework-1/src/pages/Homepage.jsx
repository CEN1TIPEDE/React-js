import React, { useState } from "react";
import { Box } from "@mui/material";
import DepositCard from "../components/HomePage/DepositCard";
import OptionCard from "../components/HomePage/OptionCard";
import BalanceCard from "../components/HomePage/BalanceCard";
import TransactionCard from "../components/HomePage/TransactionCard";
import WithdrawCard from "../components/HomePage/WithdrawCard";
import TransferCard from "../components/HomePage/TransferCard";

function Homepage() {
  const [transactionType, setTransactionType] = useState("Deposit");

  const onOptionChange = (type) => {
    setTransactionType(type);
  };

  const [userData, setUserData] = useState({ balance: 100 }); // Simulating user data

  const handleWithdraw = async (amount, note) => {
    // Simulated handleWithdraw function
    console.log("Withdraw:", amount, note);
  };

  const handleTransfer = async (amount, note, receiver) => {
    // Simulated handleTransfer function
    console.log("Transfer:", amount, note, receiver);
  };

  const handleDeposit = async (amount, note) => {
    // Simulated handleDeposit function
    console.log("Deposit:", amount, note);
  };

  return (
    <>
      <Box
        sx={{
          width: { md: 600, xs: "90%" },
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          gap: 4,
          p: { md: 0, xs: 2 },
          margin: 7,
        }}
      >
        {transactionType === "Deposit" ? (
          <DepositCard submit={handleDeposit} />
        ) : transactionType === "Withdraw" ? (
          <WithdrawCard submit={handleWithdraw} />
        ) : transactionType === "Transfer" ? (
          <TransferCard submit={handleTransfer} />
        ) : (
          <DepositCard submit={handleDeposit} />
        )}

        <OptionCard option={onOptionChange} />
      </Box>

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

        {/*  implement Balance card here also you need the pass the balance (see that I declare userData with balance on the top of the handleWithdraw) */}
        <BalanceCard balance={userData.balance}/>
        {/* impleemnt Transaction card here */}
        <TransactionCard transactions ={TransactionCard}/>
      </Box>
    </>
  );
}

export default Homepage;