import React, { Component } from "react";
import getWeb3 from "./getWeb3";
import Main from "./webapp/src/components/Pages/Main";
import GameWorldContract from "./contracts/GameWorld.json"

import "./App.css";

class App extends Component {

  state = { web3: null, accounts: [], instance: null };

  componentDidMount = async () => {
    const getIsConnected = sessionStorage.getItem("isConnected");  //get from sessionStorage
    if (getIsConnected) {
      this.connectAccount();
    }
    /*   OLD VERSION
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      console.log(web3);

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GameWorldContract.networks[networkId];
      const instance = new web3.eth.Contract(
        GameWorldContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
    */
  };

  /*  TODO: change state when user switch wallet
  window.ethereum.on('accountsChanged', function(accounts) {
    // Time to reload your interface with accounts[0]!
    props.connectAccount();
  });
  */

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Sample code for invoking (send) and receiving (call) from a contract 
    // // Stores a given value, 5 by default.
    // await contract.methods.set(5).send({ from: accounts[0] });

    // // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();

    // // Update state with the result.
    // this.setState({ storageValue: response });
  };

  connectAccount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GameWorldContract.networks[networkId];
      const instance = new web3.eth.Contract(
        GameWorldContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, instance }, this.runExample);

      sessionStorage.setItem('isConnected', "true");   // use localStorage to persist state

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }


  render() {
    /*
  if (!this.state.web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }*/
    return (
      <div className="App">
        {/*<Main web3={this.state} />*/}
        <Main web3={this.state} connectAccount={this.connectAccount.bind(this)} />
        {/*<Main />*/}
      </div>
    );
  }
}

export default App;
