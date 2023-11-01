// Layout.tsx
import React, { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
    <div>
        {/* 固定标题栏 */}
        <header>
            <h1>固定标题栏</h1>
        </header>

        {/* 内容区域 */}
        <main>{children}</main>
    </div>
);

export default Layout;
