import React from "react";

function MyComponent() {
  const handleHover = (e) => {
    const linkText = e.target.innerText='ram'
    setTimeout(() => {
        const linkText = e.target.innerText='hover'
    }, 3000);
   
  };

  return (
 <>
 <br /><br />
 <h1  onMouseDown={handleHover}>
      Hover me to copy
    </h1>
 </>
  );
}

export default MyComponent;