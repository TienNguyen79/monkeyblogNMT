import React from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";

const HomeBannerStyles = styled.div`
  height: 520px;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  .banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-content {
      max-width: 500px;
      color: white;
      margin-top: 40px;
    }
    &-image {
      width: 500px;
    }
    &-decs {
      padding: 50px 0;
    }
  }

  /* PC styles (>=1024px) */
  @media (min-width: 1024px) {
    /* PC styles */
  }

  /* Tablet styles (>=768px and <1024px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    .banner {
      &-content {
        max-width: 400px;
        color: white;
        margin-top: 40px;
      }
    }
  }

  /* Mobile styles (<640px) */
  @media (max-width: 640px) {
    .banner {
      justify-content: center;
      &-image {
        display: none;
      }
      &-content {
        max-width: 300px;
        color: white;
        margin-top: 40px;
      }
    }
  }
`;
const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container-primary">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-decs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              corporis sint voluptatum, neque est suscipit rem iste atque.
              Corporis nesciunt tempora recusandae reiciendis quaerat sunt quod
              ducimus possimus optio nostrum.
            </p>

            <Button
              kind="secondary"
              to="sign-in"
              style={{ maxWidth: "200px", width: "100%" }}
            >
              Get Started
            </Button>
          </div>
          <div className="banner-image">
            <img src="/img-banner.png" alt="banner" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
