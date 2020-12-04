import { useInView } from "react-intersection-observer";
import { useAnimation, AnimationControls } from "framer-motion";

const useScroll = (): [
  element: (node?: Element | null | undefined) => void,
  controls: AnimationControls
] => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};

export default useScroll;
