import React from "react";
import { Form } from "semantic-ui-react";
import { AccountConsumer } from "../Providers/AccountProvider";

class AccountForm extends React.Component {
  state = {
    username: this.props.username,
    membershipLevel: this.props.membershipLevel
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateAccount({ ...this.state });
  };

  render() {
    const { username, membershipLevel } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label='New Username'
          type='text'
          name='username'
          value={username}
          onChange={this.handleChange}
        />
        <Form.Select
          label='Membership Level'
          name='membershipLevel'
          value={membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions}
        />
        <Form.Button color='purple' inverted>
          Save
        </Form.Button>
      </Form>
    );
  }
}

const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
  { key: "p", text: "Platinum", value: "Platinum" },
  { key: "d", text: "Diamond", value: "Diamond" }
];

const ConnectedAccountForm = props => (
  <AccountConsumer>
    {value => (
      <AccountForm
        {...props}
        username={value.username}
        membershipLevel={value.membershipLevel}
        updateAccount={value.updateAccount}
      />
    )}
  </AccountConsumer>
);

export default ConnectedAccountForm;
