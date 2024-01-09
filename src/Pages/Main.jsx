import "./CSS/Main.css";
import Item from "../Components/Item/Item";

const Main = (prop) => {
  const titleName = prop.data;
  return (
    <div className="table-main-container">
      <h1>မိမိကြည့်ရှုလိုသော အက္ခရာကိုနှိပ်၍ ရှာ‌ဖွေဖတ်ရှုနိုင်ပါသည်။</h1>
      <div className="table-main">
        <Item data={titleName} />
      </div>
    </div>
  );
};
export default Main;
