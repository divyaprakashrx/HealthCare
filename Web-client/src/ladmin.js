import React from "react";
import ReactDOM from "react-dom";
import getWeb3 from "./getWeb3";
import HealthCare from "./contracts/HealthCare.json";

export default class Labadmin extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      recID: 0,
      message: "",
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

  async handleClick(event) {
    event.preventDefault();
    console.log(this.state.recID);
    await this.state.contract.methods
      .signRecord(this.state.recID)
      .send({ from: this.state.accounts[0], gas: 2100000 });
    this.setState({ message: "Record approved!" });
    alert("Record approved!");
    if (window) {
      window.location.reload();
    }
  }

  render() {
    return (
      <div className="container container-fluid login-conatiner">
        <div className="col-md-4">
          <h3 className="text-center">Lab Admin</h3>
          <div className="login-form">
            <h4>Approve Medical Record</h4>
            <div className="form-group">
              <input
                type="number"
                value={this.state.recID}
                onChange={(event) =>
                  this.setState({ recID: event.target.value })
                }
                className="form-control"
                placeholder="Input"
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                onClick={this.handleClick}
              >
                Approve
              </button>
            </div>
            {this.state.message && (
              <p className="alert alert-danger fade in">{this.state.message}</p>
            )}
          </div>
        </div>
        <div className="col-md-6 col-md-offset-2">
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
      </div>
    );
  }
}
