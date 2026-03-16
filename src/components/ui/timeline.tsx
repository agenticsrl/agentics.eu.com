import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans px-4 sm:px-6 md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-12 sm:pb-16 md:pb-20">
        {data.map((item, index) => {
          const progress = useTransform(
            scrollYProgress,
            [index / data.length, (index + 0.5) / data.length, (index + 1) / data.length],
            [0, 1, 1]
          );
          const scale = useTransform(progress, [0, 0.5, 1], [0.85, 1.08, 1]);
          const dotOpacity = useTransform(progress, [0, 0.4, 1], [0.5, 1, 1]);

          return (
            <motion.div
              key={index}
              className="flex justify-start pt-8 sm:pt-12 md:pt-16"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px", amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-24 sm:top-32 md:top-40 self-start">
                <motion.div
                  className="h-2 w-2 sm:h-2.5 sm:w-2.5 absolute left-2.5 sm:left-3 md:left-4 lg:left-5 rounded-full bg-white flex items-center justify-center border border-slate-300"
                  style={{ scale, opacity: dotOpacity }}
                >
                  <motion.div
                    className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-aiblue/60"
                  />
                </motion.div>
                {item.title && (
                  <h3 className="hidden md:block text-xl md:pl-12 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                    {item.title}
                  </h3>
                )}
              </div>

              <motion.div
                className="relative pl-16 sm:pl-20 md:pl-16 lg:pl-20 pr-2 sm:pr-4 w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 + 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="md:hidden block text-xl sm:text-2xl mb-3 sm:mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content}
              </motion.div>
            </motion.div>
          );
        })}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 sm:left-7 md:left-8 lg:left-9 top-0 overflow-hidden w-[1px] rounded-full bg-slate-200"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[1px] bg-aiblue/30"
          />
        </div>
      </div>
    </div>
  );
};
