import "./Item.css";
import { useNavigate } from "react-router-dom";

const Item = (prop) => {
  const data = prop.data;
  const navigate = useNavigate();

  const onItemClick = (titleId) => {
    console.log("Clicked ", titleId);
    // Navigate to the appropriate URL when item is clicked
    navigate(`/proverbs/${titleId}`);
  };

  return (
    <main className="table">
      <div className="table-box-container">
        <div className="table-title">မြန်မာစကားပုံအက္ခရာစဉ်ဇယား</div>
        {data.map((item) => {
          return (
            <div
              onClick={() => onItemClick(item.TitleId)}
              className="table-box"
              key={item.TitleId}
            >
              {item.TitleName}
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Item;
