import { useState, useEffect } from 'react';
import { RiArrowUpLine } from 'react-icons/ri';

function ScrollUp() {
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