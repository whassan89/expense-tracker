import React from 'react';
import './App.css';

//Import Components
import Header from './Components/Header'
import Balance from './Components/Balance'
import AccountsSummary from './Components/AccountsSummary'
import TransactionHistory from './Components/TransactionHisotry'
import AddTransaction from './Components/AddTransaction';
import GlobalProvider from './Context/GlobalContext';


function App() {
  return (
    <div>
      <GlobalProvider>
          <div>
          <Header></Header>
          </div>
          <div>
          <Balance></Balance>
          </div>
          <div>
          <AccountsSummary></AccountsSummary>
          </div>
          <div>
            <TransactionHistory></TransactionHistory>
          </div>
          <div>
            <AddTransaction></AddTransaction>
          </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
