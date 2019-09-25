import posed from 'react-pose';

const PageTransitionWrapper = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export default PageTransitionWrapper;
