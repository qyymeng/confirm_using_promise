import React from "react";
import { Modal} from "antd";

export default class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.promiseInfo = {};
  }

  show = async () => {
    return new Promise((resolve, reject) => {
      this.promiseInfo = {
        resolve,
        reject
      };
      this.setState({
        show: true
      });
    });
  };

  hide = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const { show } = this.state;
    const { resolve, reject } = this.promiseInfo;
    return (
      <Modal
        style={{background:"#eee",padding:20,textAlign:'center'}}
        visible={show}
        onOk={() => {
          this.hide();
          resolve();
        }}
        onCancel={() => {
          this.hide();
          reject();
        }}
      />
    );
  }

  getResolve() {
    const { resolve = () => {} } = this.promiseInfo || {};
    return result => {
      resolve(result);
      this.hide();
    };
  }

  /**
   * reject
   */
  getReject() {
    const { reject = () => {} } = this.promiseInfo || {};
    return err => {
      reject(err);
      this.hide();
    };
  }
}
