import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const loggedIn = await getLoggedInUser();

  // if(!loggedIn) redirect('/sign-in')
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
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
