import React from "react";
//import './insurance.css';
import getWeb3 from "./getWeb3";
import HealthCare from "./contracts/HealthCare.json";

export default class Insurance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      web3: null,
      accounts: null,
      contract: null,
    };
  }
  async componentDidMount() {
    const web3 = await getWeb3();
    this.setState({ accounts: await web3.eth.getAccounts() });
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = HealthCare.networks[networkId];
    const instance = new web3.eth.Contract(
      HealthCare.abi,
      deployedNetwork && deployedNetwork.address
    );
    this.setState({ web3, contract: instance });
    // console.log(await instance.methods.returnLength().call());
    // console.log(await instance.methods.getRecords().call());
    const allRecords = await instance.methods.getRecords().call();
    const temp = [];
    for (let i = 0; i < allRecords[0].length; i++) {
      temp.push([
        allRecords[0][i],
        allRecords[1][i],
        allRecords[2][i],
        allRecords[3][i],
        allRecords[4][i],
      ]);
    }
    this.setState({ records: temp });
  }

  render() {
    return (
      <div className="col-md-12">
        <h3 className="text-center">Insurance Page</h3>
        <div className="c-list">
          <h2 className="text-center">Records</h2>
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Hospital Name</th>
                <th>Price</th>
                <th>Sign Count</th>
              </tr>
            </thead>
            <tbody>
              {this.state.records.map((record) => (
                <tr>
                  <td>{record[0]}</td>
                  <td>{record[1]}</td>
                  <td>{record[2]}</td>
                  <td>{record[3]}</td>
                  <td>{record[4]}</td>
                  <td>{record[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
