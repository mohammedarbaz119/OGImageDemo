const OGImage = ({ title, author, date, content }) => {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        backgroundColor: "#f3f4f6",
        display: "flex",
        flexDirection: "column",
        padding: "48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Reddit-like logo */}
      <div
        style={{
          position: "absolute",
          top: "32px",
          left: "48px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#ff4500",
            borderRadius: "24px",
            marginRight: "16px",
          }}
        ></div>
        <span
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            color: "#ff4500",
          }}
        >
          reddit
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          marginTop: "96px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: "#1f2937",
            marginBottom: "32px",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </h1>
        <div
          style={{
            fontSize: "30px",
            color: "#4b5563",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            height: "96px",
          }}
        >
          {content}
        </div>
      </div>

      {/* Author and date info */}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <span
          style={{
            fontSize: "24px",
            color: "#374151",
          }}
        >
          Posted by u/{author}
        </span>
        <span
          style={{
            fontSize: "24px",
            color: "#6b7280",
          }}
        >
          {date}
        </span>
      </div>

      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "256px",
          height: "256px",
          backgroundColor: "#fecdd3",
          borderRadius: "100%",
          marginRight: "-128px",
          marginTop: "-128px",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "384px",
          height: "384px",
          backgroundColor: "#fed7aa",
          borderRadius: "100%",
          marginLeft: "-192px",
          marginBottom: "-192px",
        }}
      ></div>
    </div>
  );
};

export default OGImage;
