import PropsTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>공통메뉴</div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  chileren: PropsTypes.node.isRequired,
};

export default AppLayout;
