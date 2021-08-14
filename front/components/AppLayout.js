import PropsTypes from "prop-types";
import Link from "next/link";
import { Menu } from "antd";

// 특정 컴포넌트 끼리 공통

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>Singup</a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  chileren: PropsTypes.node.isRequired,
};

export default AppLayout;
