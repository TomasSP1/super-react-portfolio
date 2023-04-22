import { useState, useEffect } from 'react';

import { RiArrowUpLine } from 'react-icons/ri';


function ScrollUp() {

  /* This code block uses React state and effect hooks to create a responsive 
  "scroll-to-top" button that appears and disappears based on the user's scroll 
  position on the page. It also provides a smooth scrolling experience for the 
  user when they click the button. */

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 350) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 350) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href="#" className={showScroll ? 'scrollup show-scroll' : 'scrollup'} onClick={scrollTop}>
      <RiArrowUpLine />
    </a>
  );
}
export default ScrollUp;