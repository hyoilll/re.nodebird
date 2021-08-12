import PropsTypes from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <Link href="/signup">
          <a>Singup</a>
        </Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  chileren: PropsTypes.node.isRequired,
};

export default AppLayout;
