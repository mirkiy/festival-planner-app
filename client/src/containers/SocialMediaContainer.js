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
    <Container
      style={{
        backgroundColor: "grey",
        width: "max-content",
        height: "max-content",
        padding: "12px 24px",
        position: "fixed",
        zIndex: "10000",
        float: "5 right",
        left: "50%",
        bottom: "0",
        transform: " translate(-50%, -20%)",
        opacity: "95%",
      }}
    >
      <Stack direction="horizontal" gap={3}>
        {iconNodes}
      </Stack>
    </Container>
  );
};

export default SocialMediaContainer;
