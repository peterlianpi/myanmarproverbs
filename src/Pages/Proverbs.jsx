import { useParams, useNavigate } from "react-router-dom";
import "./CSS/Proverbs.css";

const Proverbs = (prop) => {
  const { id } = useParams();
  const data = prop.data;
  const name = data.titleName;
  const proverbs = data.proverbs;
  console.log(proverbs);
  const navigate = useNavigate();

  // Filter name based on the title id
  const filteredName = name.filter((item) => item.TitleId === parseInt(id));
  console.log(filteredName[0].TitleName);

  // Filter proverbs based on the title id
  const filteredProverbs = proverbs.filter(
    (item) => item.TitleId === parseInt(id)
  );
  console.log(filteredProverbs);

  const onClickHandler = (ProverbId, TitleId) => {
    console.log("Clicked ", ProverbId, TitleId);
    navigate(`/proverb/${ProverbId}/${TitleId}`);
  };
  const handleBackButtonClick = () => {
    // Navigate back to the previous page or a specific route
    navigate(-1); // This will navigate back one step in the browser history
  };

  return (
    <div className="proverbs-container">
      <button className="back-button" onClick={handleBackButtonClick}>
        Back
      </button>
      <h1>{filteredName[0].TitleName} (စကားပုံများ)</h1>
      {filteredProverbs.map((item, i) => {
        return (
          <ul key={i}>
            <li
              onClick={() => {
                onClickHandler(item.ProverbId, item.TitleId);
              }}
            >
              {item.ProverbName}
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default Proverbs;
