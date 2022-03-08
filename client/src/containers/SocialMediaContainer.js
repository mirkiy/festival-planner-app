import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import SocialMediaIcon from "../components/SocialMediaIcon";

const SocialMediaContainer = () => {
  const icons = [
    {
      icon: "devicon-facebook-plain colored",
      href: "https://facebook.com",
      alt: "facebook icon",
    },
    {
      icon: "devicon-twitter-original colored",
      href: "https://twitter.com",
      alt: "twitter icon",
    },
    {
      icon: "devicon-github-original colored",
      href: "https://github.com",
      alt: "github icon",
    },
    {
      icon: "devicon-twitter-original colored",
      href: "https://twitter.com",
      alt: "twitter icon",
    },
  ];

  const iconNodes = icons.map((icon, index) => {
    return <SocialMediaIcon key={index} icon={icon} />;
  });

  return (
    <Container style={{flexShrink: "0"}}
      style={{
        backgroundColor: "grey",
        width: "100%",
        height: "max-content",
        padding: "0",
        margin: "0",
      }}
    >
      <Stack id="social-media-wrapper" direction="horizontal" gap={3}>
        {iconNodes}
      </Stack>
    </Container>
  );
};

export default SocialMediaContainer;
