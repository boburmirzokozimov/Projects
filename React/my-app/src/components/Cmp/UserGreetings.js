import React, { Component } from 'react';
import UserInBtn from './UserInBtn';

export class UserGreetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  changeLog = () => {
    if (!this.state.isLoggedIn) {
      this.setState({
        isLoggedIn: true,
      });
    } else {
      this.setState({
        isLoggedIn: false,
      });
    }
  };

  render() {
    return (
      <div>
        <UserInBtn changeLog={this.changeLog} />
        <div>
          {this.state.isLoggedIn ? (
            <div>Welcome Boburmirzo</div>
          ) : (
            <div>Welcome Guest</div>
          )}
        </div>
      </div>
    );
    //     if (this.state.isLoggedIn) {
    //         return <div>Welcome Boburmirzo</div>;
    //     } else {
    //         return <div>Welcome visitor</div>;
    //     }
    //     <div>
    //       <UserInBtn />
    //     </div>
    // );
  }
}
export default UserGreetings;
