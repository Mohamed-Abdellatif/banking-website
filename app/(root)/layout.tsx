import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 //FIXME: 
  const loggedIn = {
    firstName: 'John',
    lastName: "Doe",
    $id: "user-id",
    email: "john.doe@example.com",
    userId: "user-id",
    dwollaCustomerUrl: "url",
    dwollaCustomerId: "customer-id",
    address1: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    dateOfBirth: "1990-01-01",
    ssn: "123-45-6789",
  };
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className="flex h-screen w-full flex-col">
          <div className="root-layout">
            <Image src='/icons/logo.svg' width={30} height={30} alt="menu icon"/>
            <div className="">
              <MobileNav user={loggedIn}/>
            </div>
          </div>
          {children}
        </div>
        
    </main>
  );
}

