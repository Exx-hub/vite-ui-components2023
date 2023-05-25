const StepsIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { label: "Select Buyer from PBRF" },
    { label: "Select a Unit" },
    { label: "Buyer's Valid ID" },
  ];

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {steps.map((step, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          {/* line indicator  */}
          {index > 0 && (
            <div
              style={{
                flex: "1",
                height: "2px",
                marginRight: "5px",
                background: index <= currentStep - 1 ? "black" : "gray",
                width: "100px",
              }}
            />
          )}
          {/* NUMBER CIRCLE  */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
              background: index === currentStep - 1 ? "black" : "gray",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {index + 1}
          </div>

          {/* LABEL  */}
          <div
            style={{
              display: "inline-block",
              margin: "0 5px",
              padding: "10px",
              color: index === currentStep - 1 ? "black" : "gray",
            }}
          >
            {step.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepsIndicator;
