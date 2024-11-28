export default function ShimmerDetails() {
  return (
    <>
      <div className="country-details-container">
        <div className="country-details">
          <img className="s-image" />
          <div className="details-text-container">
            <h1 className="s-heading"></h1>
            <div className="details-text s-text">
              <p>
                <span className="native-name">
                  <b></b>
                </span>
              </p>
              <p>
                <span className="population">
                  <b></b>
                </span>
              </p>
              <p>
                <span className="region">
                  <b></b>
                </span>
              </p>
              <p>
                <span className="sub-region">
                  <b> </b>
                </span>
              </p>
              <p>
                <span className="capital">
                  <b></b>
                </span>
              </p>
              <p>
                <span className="top-level-domain">
                  <b> </b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
