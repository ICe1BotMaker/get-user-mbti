import styles from './Layout.module.css';
import classNames from 'classnames/bind';
import React from 'react';

const cx = classNames.bind(styles);

interface ILayout {
    children: React.ReactNode;
}

function Layout({ children }: ILayout) {
    return <div className={cx("container")}>{children}</div>;
}

export default Layout;