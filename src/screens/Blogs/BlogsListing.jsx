import React from 'react'
import Case1 from "../../assets/home/case-study-1.png"
import { ArrowLeftOutlined , ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Blog1 from "../../assets/blogs/blog-1.svg"
import Blog2 from "../../assets/blogs/blog-2.svg"
import Blog3 from "../../assets/blogs/blog-3.svg"
import Blog4 from "../../assets/blogs/blog-4.svg"
const BlogsListing = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 pt-12 mx-auto flex flex-col items-center">
          <div className="flex flex-col  justify-between w-[80%] mb-12 text-left">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
             <ArrowLeftOutlined/> Blogs
            </h1>
            <p className="w-full leading-relaxed text-gray-500">
            Uncover cutting-edge software solutions and industry trends. Dive into our library of informative articles and insightful blogs. Explore expert thought leadership and practical tips to navigate the ever-evolving software landscape. Gain valuable knowledge to optimize your business and stay ahead of the curve.

            </p>
          </div>
          <div className="flex flex-col items-center -m-4">
            <div className="xl:w-[80%] md:w-[80%] p-4">
            <section className="text-gray-600 body-font overflow-hidden ">
        <div className="container  px-5  mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full  object-center"
            src={Blog1}
            alt="blog"
          />
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            5 Essential Habits to Avoid on Your Development Journey
            </h1>
            
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              May 21, 2024
                
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>


        </div>
        <div class="p-4">

        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full  object-center"
            src={Blog2}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
        </div>
        <div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full  object-center"
    src={Blog3}
    alt="blog"
  />
  <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
      CATEGORY
    </h2>
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
      The Catalyzer
    </h1>
    <p className="leading-relaxed mb-3">
      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
      microdosing tousled waistcoat.
    </p>
    <div className="flex items-center flex-wrap ">
      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx={12} cy={12} r={3} />
        </svg>
        1.2K
      </span>
      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
        6
      </span>
    </div>
  </div>
</div>
</div>
<div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full object-cover object-center"
    src={Blog4}
    alt="blog"
  />
  <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
      CATEGORY
    </h2>
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
      The Catalyzer
    </h1>
    <p className="leading-relaxed mb-3">
      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
      microdosing tousled waistcoat.
    </p>
    <div className="flex items-center flex-wrap ">
      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx={12} cy={12} r={3} />
        </svg>
        1.2K
      </span>
      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
        6
      </span>
    </div>
  </div>
</div>
</div>
<div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full object-cover object-center"
    src={Blog2}
    alt="blog"
  />
  <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
      CATEGORY
    </h2>
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
      The Catalyzer
    </h1>
    <p className="leading-relaxed mb-3">
      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
      microdosing tousled waistcoat.
    </p>
    <div className="flex items-center flex-wrap ">
      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx={12} cy={12} r={3} />
        </svg>
        1.2K
      </span>
      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
        6
      </span>
    </div>
  </div>
</div>
</div>
<div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full object-cover object-center"
    src={Blog3}
    alt="blog"
  />
  <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
      CATEGORY
    </h2>
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
      The Catalyzer
    </h1>
    <p className="leading-relaxed mb-3">
      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
      microdosing tousled waistcoat.
    </p>
    <div className="flex items-center flex-wrap ">
      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx={12} cy={12} r={3} />
        </svg>
        1.2K
      </span>
      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
        6
      </span>
    </div>
  </div>
</div>
</div>
<div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full object-cover object-center"
    src={Blog4}
    alt="blog"
  />
  <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
      CATEGORY
    </h2>
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
      The Catalyzer
    </h1>
    <p className="leading-relaxed mb-3">
      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
      microdosing tousled waistcoat.
    </p>
    <div className="flex items-center flex-wrap ">
      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx={12} cy={12} r={3} />
        </svg>
        1.2K
      </span>
      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
        6
      </span>
    </div>
  </div>
</div>
</div>
<div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full object-cover object-center"
    src={Blog2}
    alt="blog"
  />
  <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
      CATEGORY
    </h2>
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
      The Catalyzer
    </h1>
    <p className="leading-relaxed mb-3">
      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
      microdosing tousled waistcoat.
    </p>
    <div className="flex items-center flex-wrap ">
      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx={12} cy={12} r={3} />
        </svg>
        1.2K
      </span>
      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
        6
      </span>
    </div>
  </div>
</div>
</div>
<div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full object-cover object-center"
    src={Blog3}
    alt="blog"
  />
  <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
      CATEGORY
    </h2>
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
      The Catalyzer
    </h1>
    <p className="leading-relaxed mb-3">
      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
      microdosing tousled waistcoat.
    </p>
    <div className="flex items-center flex-wrap ">
      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx={12} cy={12} r={3} />
        </svg>
        1.2K
      </span>
      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
        6
      </span>
    </div>
  </div>
</div>
</div>
        </div>
  </div>
</section>
              
            </div>
            
            
          </div>
        </div>
      </section>
  )
}

export default BlogsListing
