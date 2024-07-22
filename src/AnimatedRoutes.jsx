import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './screens/home/Home';
import Service from './screens/Services/Service';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import Careers from './screens/Careers/Careers';
import CaseStudies from './screens/Casestudies/CaseStudies';
import Roadmap from './screens/Roadmap/Roadmap';
import Blogs from './screens/Blogs/Blogs';
import IndividualBlog from './screens/Blogs/IndividualBlog/IndividualBlog';
import CaseStudy from './screens/Casestudies/CaseStudy';
import useScrollToTop from './hooks/scrollToTop';
const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -50,
  },
};

const pageTransition = {
  duration: 0.2,
};

const AnimatedRoutes = () => {
    useScrollToTop()
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Service />
            </motion.div>
          }
        />
        <Route
          path="/team"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/careers"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Careers />
            </motion.div>
          }
        />
        <Route
          path="/casestudies"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <CaseStudies />
            </motion.div>
          }
        />
        <Route
          path="/roadmap"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Roadmap />
            </motion.div>
          }
        />
        <Route
          path="/blogs"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Blogs />
            </motion.div>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <IndividualBlog />
            </motion.div>
          }
        />
        <Route
          path="/casestudy/:id"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <CaseStudy />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
