import { Button, Col, Flex, Row } from "antd";
import "./Home.css";
import BeanToBrew from "./BeanToBrew";
import KofeeTeams from "./KofeeTeams";
import Carousele from "./Caurosel";
function Home() {
  return (
    <div className="home-page">
      <div className="top">
        <Row>
          <Col span={8}>
            <img
              width={"100%"}
              src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/kofee_red.png?alt=media&token=408dd306-8bd7-478d-92c2-4c025644fd6e"
              alt="Coffe Logo"
            ></img>
          </Col>
          <Col span={12} offset={4} className="content">
            <p className="title">BỊCH KO-FEE CÓ 102</p>
            <p>Để có một bịch KO-FEE của riêng bạn:</p>
            <ol style={{ marginLeft: 20 }}>
              <li>
                Chọn mix loại hạt cà phê bạn thích, Arabica tinh tế với Robusta
                đậm đà,...
              </li>
              <li>
                Rồi chọn túi đựng xịn, kiểu craft cổ điển hay túi bạc chống ẩm.
              </li>
              <li>
                Cuối cùng, là thiết kế theo sở thích của bạn từ label, màu sắc
                hay thậm chí là vài dòng quote nho nhỏ để tăng động lực mỗi
                ngày.
              </li>
            </ol>
            <Button
              style={{
                backgroundColor: "#8e2626",
                color: "#fff",
                padding: "20px 40px",
                marginTop: 20,
              }}
            >
              DIY Cái bịch KO-FEE
            </Button>
          </Col>
        </Row>
      </div>
      <div className="kofee-line"></div>
      <div className="intro-kofee">
        <p className="title" style={{ textAlign: "center" }}>
          KO-FEE
        </p>
        <p style={{ textAlign: "center", fontSize: 36 }}>
          /kə.fĭ/ <b>(n)</b>
        </p>
        <p style={{ padding: "0 20%", fontWeight: 600, letterSpacing: 1 }}>
          "Ko-fee" - cái tên mang âm hưởng J'rai, cái tên này như là một lời tri
          ân dành cho những người dân tộc J'rai. Những người con của núi rừng
          Tây Nguyên đã gìn giữ và phát triển nghề trồng cà phê nơi đây. Hơn cả
          một thức uống, Kofee là kết tinh của văn hóa, là niềm tự hào của người
          dân tộc J'rai.
        </p>
      </div>
      <div className="product-sell">
        <div className="header">
          <p className="title">
            KO-FEE có <br /> 2 hạt cafe xịn
          </p>
        </div>
        <Flex justify="space-evenly">
          <div>
            <div className="product-item">
              <div className="product-information">
                <p className="title ">The 100% Arabica Măng Đen</p>
                <p className="description">
                  Hạt Arabica Măng Đen cân bằng độ chua nhẹ với hương hoa, trái
                  cây và vị đắng nhẹ.
                </p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/KofeeArabica.png?alt=media&token=67da4c2e-416b-40f6-8d97-c601f7f47335"
                  alt="Kofee"
                ></img>
                <p className="money">400.000 vnđ | 1kg</p>
              </div>
              <div className="product-action">
                <p className="see-more">Tìm hiểu thêm</p>
                <i className="add-to-cart ri-shopping-cart-2-line"></i>
              </div>
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="product-information">
                <p className="title ">The 100% Robusta Măng Đen</p>
                <p className="description">
                  Hạt Robusta Măng Đen có hương vị đắng đậm đà, mạnh mẽ mang lại
                  sự sảng khoái, tỉnh táo
                </p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/KoffeRobusta.png?alt=media&token=6d5fb927-dead-4532-a667-46ed27791310"
                  alt="Kofee"
                ></img>
                <p className="money">400.000 vnđ | 1kg</p>
              </div>
              <div className="product-action">
                <p className="see-more">Tìm hiểu thêm</p>
                <i className="add-to-cart ri-shopping-cart-2-line"></i>
              </div>
            </div>
          </div>
        </Flex>
      </div>
      <div className="kofee-bean-to-brew">
        <div className="header"> "FROM BEAN TO BREW" </div>
        <div className="bean-to-brew">
          <BeanToBrew />
        </div>
      </div>
      {/* <div className="kofee-team">
        <div className="header">KO-FEE TEAMS</div>
        <div>
          <KofeeTeams />
        </div>
      </div> */}
      <div className="kofee-team">
        <div className="header">KO-FEE TEAMS</div>
        <div>
          <Carousele />
        </div>
      </div>
    </div>
  );
}

export default Home;
