import Carousel from "better-react-carousel";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sticky top-0">
      <h2 className="text-3xl font-bold font-serif text-center mb-8">Our Followers</h2>
      <Carousel cols={1} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src="https://i.ibb.co/YZMhSMH/mobile-apps-development-nz-1-modified.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://i.ibb.co/XDdCR7H/IMG-20220610-160657-2.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://i.ibb.co/Lv8Zr86/istockphoto-1406197730-170667a.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src="https://i.ibb.co/dGZWNrk/istockphoto-1325359218-170667a.jpg" alt="" />
      </Carousel.Item>
      {/* ... */}
    </Carousel>
    </div>
  );
};

export default Sidebar;
