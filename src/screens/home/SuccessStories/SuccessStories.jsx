import React, { useEffect, useState } from 'react';
import Success1 from "../../../assets/home/case-study-1.png";
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import LeftArrow from "../../../assets/logo/left-arrow.svg";
import RightArrow from "../../../assets/logo/right-arrow.svg";
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import FadeUpBounce from '../../../animations/FadeUpBounce';

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [caseStudies, setCaseStudies] = useState([]);
  const [size, setSize] = useState(0);

  const fetchAllCaseStudies = () => {
    // Here we fetch all the case studies from strapi backend
    axios.get("http://localhost:1337/api/casestudies?populate=*")
      .then(result => {
        console.log(result?.data?.data);
        setCaseStudies(result?.data?.data);
        setSize(result?.data?.data?.length);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchAllCaseStudies();
  }, []);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    // exit: { opacity: 0, x: -100 },
  };

  return (
        <FadeUpBounce>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-10 mx-auto flex flex-col">
        <div className='lg:w-4/5 text-[41px] font-bold rounded-md p-4 mx-auto flex flex-wrap'>

        <h1>Success Stories</h1>

        </div>
        <AnimatePresence mode='wait'>
          {caseStudies.length > 0 && (
            <motion.div
            key={caseStudies[currentIndex]?.id}
            initial="enter"
            animate="center"
            exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="lg:w-4/5 bg-[#282828] rounded-md p-4 mx-auto flex flex-wrap"
              >
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 className="text-white text-3xl title-font font-medium mb-4">
                  {caseStudies[currentIndex]?.attributes?.Title}
                </h1>
                <p className="leading-relaxed mb-4 text-white">
                  {caseStudies[currentIndex]?.attributes?.Description}
                </p>
                <div className="flex gap-2 mb-4">
                  <a className="text-white font-thin py-2 px-4 bg-[#363636] rounded-md text-base">
                    {caseStudies[currentIndex]?.attributes?.Industry}
                  </a>
                </div>
                <div className="flex">
                  <Link to={`/casestudy/${caseStudies[currentIndex]?.id}`}>
                    <span className="title-font font-thin text-base text-[#CCEA17] flex items-center">
                      Read case Study <div className='p-2'><ArrowRightOutlined style={{ marginTop: '5px' }} /> </div>
                    </span>
                  </Link>
                </div>
              </div>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-[500px] h-[500px] object-cover object-center rounded"
                src={`http://localhost:1337${caseStudies[currentIndex]?.attributes?.CoverImage?.data.attributes?.url}`}
                />
            </motion.div>
          )}
        </AnimatePresence>
        <div className='lg:w-4/5 p-4 mx-auto flex gap-2'>
          <button onClick={() => {
            setCurrentIndex(prev => prev === 0 ? size - 1 : prev - 1);
          }}>
            <img src={LeftArrow} />
          </button>
          <button onClick={() => {
            setCurrentIndex(prev => prev === size - 1 ? 0 : prev + 1);
          }}>
            <img src={RightArrow} />
          </button>
        </div>
      </div>
    </section>
            </FadeUpBounce>
  );
}

export default SuccessStories;
