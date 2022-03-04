import React from "react";

const SocialMediaIcon = ({ icon }) => {
  return (
    <div
      className="rounded"
      style={{
        width: "36px",
        height: "36px",
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
          className={icon.icon}
          alt={icon.alt}
          style={{
            fontSize: "24px",
          }}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcon;
