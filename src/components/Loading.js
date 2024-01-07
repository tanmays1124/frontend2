// import react from 'react';

const Loading = () => {
  const style = {
    height: "300px",
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card col-12 placeholder" style={style}></div>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
      </div>
    </div>
  );
};

export default Loading;
