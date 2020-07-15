import Link from "next/link";
import React from "react";

interface Props {
  posts?: string;
}

interface State {
  inputval?: string;
}

export default class Test extends React.Component<Props, State> {
    state = { inputval: "__init" };
  static async getInitialProps(context) {
    console.log("getStaticProps");
    return {
      posts: "fuga",
    };
  }

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>)=> {
    this.setState({inputval: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>test</h1>
        <p>Prop.posts: {this.props.posts}</p>
        <p>state.inputval: {this.state.inputval}</p>
        <input type="text" value={this.state.inputval} onChange={this.onChangeInput} />
        <Link href="/">
          <a>home</a>
        </Link>
      </div>
    );
  }
}
