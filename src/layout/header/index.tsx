import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { setUserInfo } from '../../store/user/action'
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.svg';
import { IUser } from '../../types';
import { DownOutlined } from '@ant-design/icons';
import './index.scss';

interface IProps {
  children?: any;
  userInfo: IUser;
  setUserInfo: (data: IUser) => void;
}

const Header: React.FC<IProps> = ({ children, userInfo, setUserInfo }) => {

  useEffect(() => {
    const tempUser = { id: 1, name: 'admin', avatar: '' };
    setUserInfo(tempUser)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="layout-header">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
        <span>H5 Design</span>
      </div>
      <div className="header-right">
        {
          children ? children :
          <div className="user-wrapper">
            <img src={userInfo.avatar || avatar} alt="avatar"/>
            <span>{userInfo.name}</span>
            <DownOutlined />
          </div>
        }
      </div>
    </div>
  )
}

export default connect(
  (state: any) => ({
    userInfo: { ...state.user }
  }),
  (dispatch: any) => bindActionCreators({ setUserInfo }, dispatch)
)(Header)
