import "./CSS/Proverb.css";
import { useParams, useNavigate } from "react-router-dom";

const Proverb = (prop) => {
  const { id1, id2 } = useParams();
  const navigate = useNavigate();
  const data = prop.data;
  // Filter proverbs based on the title id
  const filteredProverbs = data.filter(
    (item) => item.ProverbId === parseInt(id1) && item.TitleId === parseInt(id2)
  );
  const title = filteredProverbs[0].ProverbName;
  const detail = filteredProverbs[0].ProverbDesp;

  const handleBackButtonClick = () => {
    // Navigate back to the previous page or a specific route
    navigate(-1); // This will navigate back one step in the browser history
  };

  return (
    <div className="detail-container">
      <h3 className="title">{title}</h3>
      <h5 className="title-2">(စကားပုံ)</h5>
      <p>{detail}</p>{" "}
      <button className="back-button" onClick={handleBackButtonClick}>
        Back
      </button>
    </div>
  );
};
export default Proverb;
