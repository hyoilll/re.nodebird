import "antd/dist/antd.css";
import PropTypes from "prop-types";
import Head from "next/head";

// 모든 페이지에서 공통적으로 쓰이는 것

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>NodeBird</title>
      </Head>
      <Component></Component>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
