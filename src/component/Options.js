import React from "react";
import Container from "react-bootstrap/Container";

const Options = () => {
  return (
    <div className="options">
      <Container>
        <div className="title">
          <h2>區域選擇</h2>
        </div>
        <div className="content">
          <button>
            <p>大台北</p>
          </button>
          <button>
            <p>台中</p>
          </button>
          <button>
            <p>台南</p>
          </button>
          <button>
            <p>高雄</p>
          </button>
          <button>
            <p>花東</p>
          </button>
          <button>
            <p>其他</p>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Options;
