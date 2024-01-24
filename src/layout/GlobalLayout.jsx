import React from "react";
import { Layout } from "antd";
const { Content, Footer } = Layout;

const GlobalLayout = ({ children }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            padding: 25,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor:"#009B83",
          height:'100px',
          color:"#Fff"
        }}
      >
        <p>Todos os direitos reservados</p>
      </Footer>
    </Layout>
  );
};
export default GlobalLayout;
