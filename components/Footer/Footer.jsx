import footerStyles from "./footer.module.css";
import Logo from "../../assets/CanLogo.png";
import Image from "next/image";

// const

const Footer = () => {
  return (
    <div className={footerStyles["outer-block"]}>
      <div className={footerStyles["inner-block"]}>
        <div className={footerStyles["upper-footer"]}>
          <svg
            style={{ marginRight: 10 }}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-wallet"
            viewBox="0 0 16 16"
          >
            <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
          </svg>
          EN UYGUN FİYATLAR
        </div>
        <div style={{ textAlign: "left" }}>
          <p style={{ fontSize: 20, color: "white" }}>Bize Ulaşın</p>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginBottom: 30,
              boxSizing: "border-box",
            }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#ff9b0f"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </div>
            <div style={{ fontSize: 20, color: "white" }}>
              0 312 372 14 09
              <div style={{ fontSize: 15, marginTop: 10 }}>
                Pazartesi – Cumartesi: 08:00-21:00
                <br />
                Pazar: 08:00 – 21:00
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginBottom: 30,
              boxSizing: "border-box",
            }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#ff9b0f"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </div>
            <div style={{ fontSize: 20, color: "white" }}>
              0 554 585 42 99
              <div style={{ fontSize: 15, marginTop: 10 }}>
                Pazartesi – Cumartesi: 08:00-23:00
                <br />
                Pazar: 08:00 – 23:00
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginBottom: 30,
              boxSizing: "border-box",
            }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#ff9b0f"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            </div>
            <div style={{ fontSize: 17, color: "white" }}>
              denizcaanbolat0@gmail.com
            </div>
          </div>

          <br />
        </div>
      </div>
      <div className={footerStyles["inner-block"]}>
        <div className={footerStyles["upper-footer"]}>
          <svg
            style={{ marginRight: 10 }}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-person-check"
            viewBox="0 0 16 16"
          >
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
          </svg>
          TECRÜBELİ KADRO
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "70%",
          }}
        >
          <div>
            <Image src={Logo} alt="Logo" height="100%" width="110px" />
          </div>

          <div
            style={{
              color: "white",
              fontSize: 17,
              textAlign: "left",
              marginTop: 20,
            }}
          >
            Şahintepe Mahallesi 670. sokak No:5/A Mamak/Ankara
            <br />
            <br />
            Posta Kodu: 06320
          </div>
        </div>
      </div>
      <div className={footerStyles["inner-block"]}>
        <div className={footerStyles["upper-footer"]}>
          <svg
            style={{ marginRight: 10 }}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-book"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
          </svg>
          K2 YETKİ BELGESİ
        </div>
        <div className={footerStyles["right-inner"]}>
          <div>
            <div className={footerStyles["right-inner-heading"]}>
              Bireysel Hizmetler
            </div>
            <div style={{ textAlign: "left", fontSize: 15, marginTop: 20 }}>
              {[
                "Evden Eve Nakliyat",
                "Asansörlü Nakliyat",
                "Şehiriçi Nakliyat",
                "Şehirlerarası Nakliyat",
                "Eşya Depolama",
                "Parça Eşya Taşıma",
              ].map((element, index) => (
                <div key={index} style={{ marginBottom: 2 }}>
                  {element}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className={footerStyles["right-inner-heading"]}>
              Kurumsal Hizmetler
            </div>
            <div style={{ textAlign: "left", fontSize: 15, marginTop: 20 }}>
              {[
                "Sigortalı Nakliyat",
                "Ofis Nakliyesi",
                "İşyeri Taşımacılığı",
                "Hastane Taşımacılığı",
                "Fabrika Nakliyesi",
                "Banka Taşımacılığı",
              ].map((element, index) => (
                <div key={index} style={{ marginBottom: 2 }}>
                  {element}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
