import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/3fdd6752-5b76-4868-8c21-90d476ab565b/files/ccaff90e-0ddf-4380-aec0-06341fc1f763.jpg"
          alt="Русско-японская война. Морское сражение"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.4em] text-sm md:text-base mb-4 opacity-80">
          1904 — 1905
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          РУССКО-<br/>ЯПОНСКАЯ<br/>ВОЙНА
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Дальний Восток. Порт-Артур. Цусима.<br/>
          Первая великая война нового века, изменившая ход истории.
        </p>
      </div>
    </div>
  );
}