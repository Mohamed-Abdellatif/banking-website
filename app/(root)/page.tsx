import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"


const Home = () => {
    const loggedIn={
        firstName:"Mohamed",lastName:"Osman",email:"mohamedosman@gmail.com",
    }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
           <HeaderBox
           type="greeting"
           title="Welcome to Our Bank!"
           user={loggedIn?.firstName||"Guest"}
           subtext="Access and manage your acount and transactions efficiently."
           />
           <TotalBalanceBox
           accounts={[]}
           totalBanks={1}
           totalCurrentBalance={1250.35}


           />
        </header>
        Recent Transactions
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:123.50},{currentBalance:500.50}]}/>
    </section>
  )
}

export default Home
