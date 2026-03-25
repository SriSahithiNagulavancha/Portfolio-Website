import { motion } from "framer-motion";

import { fadeUp } from "../utils/animations";

function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show">

      
          
          <h2 className="text-3xl font-bold">
            About Me
          </h2>

          <p>I build modern web apps</p>

        </motion.div>
      </div>
    </section>
  );
}

export default About;