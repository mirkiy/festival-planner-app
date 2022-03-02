import React from "react";

const SocialMediaIcon = ({ icon }) => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "white",
      }}
    >
      <a
        href={icon.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <i
          class={icon.icon}
          alt={icon.alt}
          style={{
            fontSize: "30px",
          }}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcon;
