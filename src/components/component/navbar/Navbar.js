import React, { useState } from 'react';
import TextPointer from '../textPointer/TextPointer';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

function Navbar({ title, services }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <header style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          zIndex: 1,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <TextPointer text={title} fontSize="20"
          icon={isOpen ?<FaAngleUp style={{fontSize: "16px", fontWeight: "lighter"}} />:<FaAngleDown style={{ fontSize: "16px", fontWeight: "lighter" }} />} />
      </div>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            color: "black",
            backgroundColor: '#ffff',
            boxShadow: "0px 2px 4px rgba(0, 0, 0, )",
            padding: "5px 0",
            zIndex: 1,
            minWidth: "150px",
            borderRadius: "10px",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {services.map((service) => (
            <div key={service.title} style={{ padding: "5px 10px" }}>
              <a href={service.link} style={{ textDecoration: "none", color: "black" }}>
                {service.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
