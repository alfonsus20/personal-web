import { HTMLMotionProps } from "framer-motion";

export const getAnimationProps = (props: HTMLMotionProps<'div'> & { inView?: boolean; }): HTMLMotionProps<'div'> => ({
    ...props,
    initial: "initial",
    ...(props.inView ? { whileInView: 'animate' } : {
        animate: "animate",
    }),
    viewport: {
        once: true,
    }
});