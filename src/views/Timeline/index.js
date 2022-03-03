import React, { useEffect } from 'react';

const Timeline = () => {
  useEffect(() => {
    document.title = "Rik den Breejen | Timeline";
  }, []);

  return (
    <div>Timeline</div>
  );
};

export default Timeline;