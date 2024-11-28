import "../style/shimmer.css";
export default function Shimmer() {
  return (
    <>
      <div className="countries-container">
        {Array.from({ length: 20 }).map((el, i) => {
          return (
            <div key={i} className="country-card shimmer-card">
              <div className="image shimmer-image"></div>
              <div className="card-text s-text">
                <h3 className="card-title s-title"></h3>
                <p className="b"></p>
                <p className="b"></p>
                <p className="b"></p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
