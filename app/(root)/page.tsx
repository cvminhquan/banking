import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn: User = {
    $id: "user_12345",
    email: "john.doe@example.com",
    userId: "U123456789",
    dwollaCustomerUrl: "https://api.dwolla.com/customers/12345678-1234-1234-1234-123456789012",
    dwollaCustomerId: "12345678-1234-1234-1234-123456789012",
    firstName: "John",
    lastName: "Doe",
    address1: "123 Main Street",
    city: "Springfield",
    state: "IL",
    postalCode: "62704",
    dateOfBirth: "1990-01-01",
    ssn: "123-45-6789",
  };
  const accounts: Account[] = [
    {
      id: "1",
      availableBalance: 1500.75,
      currentBalance: 2000.00,
      officialName: "Checking Account",
      mask: "1234",
      institutionId: "bank_001",
      name: "My Primary Checking",
      type: "depository",
      subtype: "checking",
      appwriteItemId: "item_abc123",
      sharableId: "share_abc123",
    },
    {
      id: "2",
      availableBalance: 5000.00,
      currentBalance: 5100.00,
      officialName: "Savings Account",
      mask: "5678",
      institutionId: "bank_001",
      name: "Emergency Savings",
      type: "depository",
      subtype: "savings",
      appwriteItemId: "item_def456",
      sharableId: "share_def456",
    },
    {
      id: "3",
      availableBalance: 200.00,
      currentBalance: 200.00,
      officialName: "Credit Card",
      mask: "9876",
      institutionId: "bank_002",
      name: "Travel Rewards Card",
      type: "credit",
      subtype: "reward",
      appwriteItemId: "item_ghi789",
      sharableId: "share_ghi789",
    },
  ];
  const accountsData = accounts?.data;
  
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName}
          subtext="Access and manage your account and transaction"
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={999999999999}
          />
        </header>
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={accounts?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
};

export default Home;
