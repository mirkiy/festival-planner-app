import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import SocialMediaIcon from "../components/SocialMediaIcon";

const SocialMediaContainer = () => {
  const icons = [
    {
      icon: "fa fa-brands fa-facebook-f",
      href: "https://facebook.com",
      alt: "facebook icon",
    },
    {
      icon: "fa fa-brands fa-twitter",
      href: "https://twitter.com",
      alt: "twitter icon",
    },
    {
      icon: "fa fa-brands fa-pinterest",
      href: "https://pinterest.com",
      alt: "github icon",
    },
    {
      icon: "fa fa-brands fa-instagram",
      href: "https://www.instagram.com/",
      alt: "instagram icon",
    },
  ];

  const iconNodes = icons.map((icon, index) => {
    return <SocialMediaIcon key={index} icon={icon} />;
  });

  return (
    <Container
      style={{
        flexShrink: "0",
        minWidth: "100%",
        height: "max-content",
        padding: "2vh 0",
      }}
    >
      <Stack>
        <Stack
          id="social-media-wrapper"
          style={{ justifyContent: "center" }}
          direction="horizontal"
          gap={3}
        >
          {iconNodes}
        </Stack>
        <i className="footer-text">Follow us on social media</i>
        <hr />
        <p className="footer-text">
          2022 &copy; Overconfident Rats{" "}
          <a
            href="https://www.pret.co.uk/en-GB/pretcoffeesub"
            target="_blank"
            rel="noopener noreferrer"
          >
            ☕️
          </a>
        </p>
      </Stack>
    </Container>
  );
};

export default SocialMediaContainer;
