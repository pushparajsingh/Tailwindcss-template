import React from "react";
import logo from "../Asserts/Images/logo-white.png";
import Search from "../Asserts/Images/search.png";
import bannerImg from "../Asserts/Images/hero5-img.png";
import reward from "../Asserts/Images/cup.png";
import webDevelopment from "../Asserts/Images/service5-1.png";
import degitalMarketing from "../Asserts/Images/service5-2.jpg";
import eCommerce from "../Asserts/Images/service5-3.jpg";
import appDevelopment from "../Asserts/Images/service5-4.jpg";
import about from "../Asserts/Images/about-us5.png";
import reason from "../Asserts/Images/choose-us5.png";
import webDesigin2 from "../Asserts/Images/case4.jpg";
import webDesigin3 from "../Asserts/Images/service3-img3.jpg";
import webDesigin4 from "../Asserts/Images/case3.jpg";
import webDesigin5 from "../Asserts/Images/blog2.jpg";
import webDesigin6 from "../Asserts/Images/case2.jpg";
import webDesigin7 from "../Asserts/Images/case1.jpg";
import girlWithcomputer from "../Asserts/Images/call-to-action5-img.png";
import Brand1 from "../Asserts/Images/brand5-img1.png";
import Brand2 from "../Asserts/Images/brand5-img2.png";
import Brand3 from "../Asserts/Images/brand5-img3.png";
import worldWide from "../Asserts/Images/worldWide_Service.png";
import prizingPlan from "../Asserts/Images/investment.png";
import sevicePlan from "../Asserts/Images/time.png";
import activity from "../Asserts/Images/activity.png";
import blueMan from "../Asserts/Images/blue-man.jpg";
import greenMan from "../Asserts/Images/green-man.jpg";
import orangeMan from "../Asserts/Images/orange-man.jpg";
import amazonLogo from "../Asserts/Images/amazon.png";
import gooleLogo from "../Asserts/Images/goole.png";
import star from "../Asserts/Images/star.png";
import blog1 from "../Asserts/Images/blog1.jpg";
import blog2 from "../Asserts/Images/blog2.jpg";
import favorite from "../Asserts/Images/wishlist.png";
import message from "../Asserts/Images/email.png";
import phone from "../Asserts/Images/phone.png";
import facebook from "../Asserts/Images/facebook-logo.png";
import linkdin from "../Asserts/Images/linkedin-logo.png";
import twitter from "../Asserts/Images/twitter-logo.png";
import pinterest from "../Asserts/Images/pinterest-logo.png";

const Index = () => {
  return (
    <>
      <section className="header flex justify-around pt-6">
        <div>
          <img src={logo} />
        </div>
        <div>
          <ul className="flex">
            <li className="text-xl">
              Home
              <i className="fa-solid fa-angle-right ml-2 rotate-90 text-slate-400" />
            </li>
            <li className="text-xl">About</li>
            <li className="text-xl">
              Pages
              <i className="fa-solid fa-angle-right ml-2 rotate-90 text-slate-400" />
            </li>
            <li className="text-xl">Service</li>
            <li className="text-xl">
              Blog
              <i className="fa-solid fa-angle-right ml-2 rotate-90 text-slate-400" />
            </li>
            <li className="text-xl">Contact</li>
          </ul>
        </div>
        <div>
          <img src={Search} />
        </div>
      </section>
      <section className="banner flex">
        <div className="flex w-6/12 content-center">
          <div className="ml-20 mt-60">
            <p className="tracking-widest text-blue-500">
              //CREATIVE DIGITAL AGENCY
            </p>
            <h1 className="mt-5 text-6xl font-black leading-[5rem]">
              Best IT Solutions And <br />
              Great
              <span className="text-blue-500"> Business</span>
            </h1>
            <p className="mt-4 text-xl opacity-60">
              There are many lorem ipsum available but the majority have in some
              form <br /> randomised words which don't look even slightly
              believable.
            </p>
            <div className="mt-12">
              <i
                href="#"
                className="rounded-full bg-blue-600 px-12 py-6 not-italic"
              >
                Get Started
                <i class="fa-solid fa-arrow-right ml-2 rotate-[315deg]"></i>
              </i>
              <i
                href="#"
                className="secondaryBtn ml-5 whitespace-nowrap not-italic"
              >
                <img src={reward} width={"50"} className="mr-5 inline-block" />
                Award Wining
              </i>
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <img src={bannerImg} />
        </div>
      </section>
      <section className="service session-height">
        <div className="flex content-between justify-between">
          <div className="ml-10">
            <p className="tracking-widest text-blue-500">
              // SERVICE WE PROVIDE
            </p>
            <h1 className="mt-5 text-5xl">
              Service What We <span className="text-blue-500">Provides</span>
            </h1>
          </div>
          <div className="allServices mr-16 mt-12">
            <i
              href="#"
              className="rounded-full bg-blue-600 px-12 py-6 not-italic"
            >
              All Services
              <i class="fa-solid fa-arrow-right ml-2 rotate-[315deg]"></i>
            </i>
          </div>
        </div>
        <div className="ga mt-20 grid px-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="border border-gray-700">
            <div>
              <img src={webDevelopment} className="w-full" />
            </div>
            <div className="p-10">
              <h1 className="text-2xl">Web Development</h1>
              <hr className="mt-4 w-14 border border-blue-500" />
              <p className="mt-9 opacity-60">
                There are many lorem Ipsum the randomised words which don't
                available butter
              </p>
              <h4 className="mt-5 inline-block">Get Started</h4>
              <i class="fa-solid fa-arrow-right ml-2 rotate-[315deg]"></i>
              <hr className="mt-1 w-28 opacity-40" />
            </div>
          </div>
          <div className="border border-gray-700">
            <div>
              <img src={degitalMarketing} className="w-full" />
            </div>
            <div className="p-10">
              <h1 className="text-2xl">Digital Marketing</h1>
              <hr className="mt-4 w-14 border border-blue-500" />
              <p className="mt-9 opacity-60">
                There are many lorem Ipsum the randomised words which don't
                available butter
              </p>
              <h4 className="mt-5 inline-block">Get Started</h4>
              <i class="fa-solid fa-arrow-right ml-2 rotate-[315deg]"></i>
              <hr className="mt-1 w-28 opacity-40" />
            </div>
          </div>
          <div className="border border-gray-700">
            <div>
              <img src={eCommerce} className="w-full" />
            </div>
            <div className="p-10">
              <h1 className="text-2xl">CMS & eCommerce</h1>
              <hr className="mt-4 w-14 border border-blue-500" />
              <p className="mt-9 opacity-60">
                There are many lorem Ipsum the randomised words which don't
                available butter
              </p>
              <h4 className="mt-5 inline-block">Get Started</h4>
              <i class="fa-solid fa-arrow-right ml-2 rotate-[315deg]"></i>
              <hr className="mt-1 w-28 opacity-40" />
            </div>
          </div>
          <div className="border border-gray-700 ">
            <div>
              <img src={appDevelopment} className="w-full" />
            </div>
            <div className="p-10">
              <h1 className="text-2xl">App Development</h1>
              <hr className="mt-4 w-14 border border-blue-500" />
              <p className="mt-9 opacity-60">
                There are many lorem Ipsum the randomised words which don't
                available butter
              </p>
              <h4 className="mt-5 inline-block">Get Started</h4>
              <i class="fa-solid fa-arrow-right ml-2 rotate-[315deg]"></i>
              <hr className="mt-1 w-28 opacity-40" />
            </div>
          </div>
        </div>
      </section>
      <section className="about md:session-height pb-10">
        <div className="flex">
          <div className="w-1/2">
            <img src={about} className="ml-20" />
          </div>
          <div className="w-1/2">
            <div className="pr-20 pt-10">
              <span className="tracking-widest text-blue-500">// ABOUT US</span>
              <h1 className="mt-5 text-5xl leading-[4rem]">
                Trusted By Worldwide
                <span className="text-blue-500"> Clients</span> for the Best
                Services
              </h1>
              <p className="mt-5 text-xl opacity-50">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>

              <div className="catigoryProgress mt-10">
                <h1 className="text-xl">Development</h1>
                <div className="relative mt-6 h-[5px] rounded-full bg-slate-400">
                  <hr className="absolute top-0 inline-block h-full w-[90%] rounded-full border-none bg-blue-500" />
                  <span className="absolute -top-8 right-16 -ml-5 inline">
                    90%
                  </span>
                </div>
                <h1 className="mt-6 text-xl">UI/UX Design</h1>
                <div className="relative mt-6 h-[5px] rounded-full bg-slate-400">
                  <hr className="absolute top-0 inline-block h-full w-[80%] rounded-full border-none bg-blue-500" />
                  <span className="absolute -top-8 right-36 -ml-5 inline">
                    80%
                  </span>
                </div>
                <h1 className="mt-6 text-xl">IT Consulting</h1>
                <div className="relative mt-6 h-[5px] rounded-full bg-slate-400 p-0">
                  <hr className="absolute top-0 inline-block h-full w-[70%] rounded-full border-none bg-blue-500" />
                  <span className="absolute -top-8 right-56 -ml-5 inline">
                    70%
                  </span>
                </div>
              </div>
              <i
                href="#"
                className="primary-btn mt-12 inline-block rounded-full bg-blue-600 px-12 py-6 not-italic"
              >
                More About
                <i class="fa-solid fa-arrow-right ml-2 rotate-[315deg]"></i>
              </i>
            </div>
          </div>
        </div>
      </section>
      <section className="show-expertise grid h-80 grid-cols-4 content-center gap-5 border border-gray-600 bg-[#0f2538] p-10">
        <div className="h-40 border border-gray-600 bg-[#193c5b] p-10">
          <h1 className="text-4xl">3690 +</h1>
          <p className="text-gray-400">project Completed</p>
        </div>
        <div className="h-40 border border-gray-600 bg-[#193c5b] p-10">
          <h1 className="text-4xl">1200 +</h1>
          <p className="text-gray-400">Satisfied Clients</p>
        </div>
        <div className="h-40 border border-gray-600 bg-[#193c5b] p-10">
          <h1 className="text-4xl">99 +</h1>
          <p className="text-gray-400">Expert Members</p>
        </div>
        <div className="h-40 border border-gray-600 bg-[#193c5b] p-10">
          <h1 className="text-4xl">190 +</h1>
          <p className="text-gray-400">Award Wining</p>
        </div>
      </section>
      <section className="reasons session-height ">
        <div className="flex">
          <div className="w-1/2 pl-20">
            <div>
              <span className="uppercase tracking-widest text-blue-500">
                // Reason for choose us
              </span>
              <h1 className="mt-5 text-5xl">
                We're the Best Digital
                <span className="text-blue-500"> Solution </span>
                <br /> Provider Company
              </h1>
              <div className="mt-5">
                <div className="flex">
                  <div className="sevice-box mt-11 h-20 w-28 bg-[#1c2439]">
                    <img src={worldWide} className="opacity-80" />
                  </div>
                  <div className="pl-8">
                    <h1 className="mt-10 text-2xl">Worldwide Services</h1>
                    <p className="mt-4 text-xl opacity-50">
                      There are many lorem Ipsum available but to the majority
                      that's randomised words which don't look.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="sevice-box mt-11 h-20 w-28 bg-[#1c2439] pl-2 pt-2">
                    <img
                      src={prizingPlan}
                      className="prizingPlan opacity-80"
                      width={"80%"}
                    />
                  </div>
                  <div className="pl-8">
                    <h1 className="mt-10 text-2xl">Flexible Pricing Plan</h1>
                    <p className="mt-4 text-xl opacity-50">
                      There are many lorem Ipsum available but to the majority
                      that's randomised words which don't look.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="sevice-box mt-11 h-20 w-28 bg-[#1c2439] pl-3 pt-2">
                    <img
                      src={sevicePlan}
                      className="opacity-80"
                      width={"90%"}
                    />
                  </div>
                  <div className="pl-8">
                    <h1 className="mt-10 text-2xl">24/7 Service & Supports</h1>
                    <p className="mt-4 text-xl opacity-50">
                      There are many lorem Ipsum available but to the majority
                      that's randomised words which don't look.
                    </p>
                  </div>
                </div>
              </div>
              <i
                href="#"
                className="primary-btn mt-12 inline-block rounded-full bg-blue-600 px-12 py-6 not-italic"
              >
                All Services
                <i class="fa-solid fa-arrow-right ml-2 rotate-[315deg]"></i>
              </i>
            </div>
          </div>
          <div className="w-1/2">
            <img src={reason} className="-mt-20 ml-16 h-full" />
          </div>
        </div>
      </section>
      <section className="latest-portFolio block h-[85rem] pt-20">
        <div className="flex justify-between">
          <div className="pl-20">
            <div>
              <span className="uppercase tracking-widest text-blue-500">
                // Latest PortFolio
              </span>
              <h1 className="mt-5 text-5xl">
                Our Latest Case <span className="text-blue-500">Studies </span>
              </h1>
            </div>
          </div>
          <div className="project-completeNo pr-20">
            <h1 className="pb-0 pr-10 text-right text-5xl">
              <img
                src={activity}
                width={"11%%"}
                height={"11%%"}
                className="inline-block"
              />
              3690+
            </h1>
            <p className="-mt-2 text-right text-xl opacity-50">
              Project Completed
            </p>
          </div>
        </div>
        <div className="pl-20 pt-16">
          <ul className="flex">
            <li className="text-blue-500 underline decoration-blue-500 decoration-2 underline-offset-8">
              All Works
            </li>
            <li className="ml-5 underline decoration-gray-500 decoration-2 underline-offset-8">
              Cloud Service
            </li>
            <li className="ml-5 underline decoration-gray-500 decoration-2 underline-offset-8">
              Networking
            </li>
            <li className="ml-5 underline decoration-gray-500 decoration-2 underline-offset-8">
              Security
            </li>
            <li className="ml-5 underline decoration-gray-500 decoration-2 underline-offset-8">
              Web Design
            </li>
          </ul>
        </div>
        <div className="px-24">
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="h-[30rem]">
              <img src={webDesigin3} className="h-full w-full" />
            </div>
            <div className="h-[30rem]">
              <img src={webDesigin4} className="h-full w-full" />
            </div>
            <div className="h-[30rem]">
              <img src={webDesigin5} className="h-full w-full" />
            </div>
            <div className="h-[30rem]">
              <img src={webDesigin6} className="h-full w-full" />
            </div>
            <div className="h-[30rem]">
              <img src={webDesigin7} className="h-full w-full" />
            </div>
            <div className="h-[30rem]">
              <img src={webDesigin2} className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-24 mt-16 md:mt-16">
        <div className="pt-10 md:pt-0 rounded-[0.5rem] bg-[rgb(0,118,248)] lg:flex lg:h-96 lg:pl-24">
          <div className="lg:mt-20 lg:w-1/2">
            <h1 className="text-5xl text-center md:text-start">
              Let's Create an Amazing <br />
              Project Together
            </h1>
            <p className="mt-5 text-center">
              There are many lorem Ipsum available but the majority have in
              randomised <br className="hidden lg:block"/> words which even slightly.
            </p>
            <span className="ml-44 md:ml-0 mt-7 inline-block rounded-full bg-white px-10 py-5 text-blue-500">
              Contact Us
              <i class="fa-solid fa-arrow-right ml-2 rotate-[315deg]"></i>
            </span>
          </div>
          <div className="pb-10 pl-10 pr-10 pt-10 lg:w-1/2 lg:pr-20">
            <img src={girlWithcomputer} className="h-full w-full" />
          </div>
        </div>
      </section>
      <section className="h-[890px] md:px-24 pt-20 md:pt-28 pb-10 md:pb-0">
        <div className="text-center">
          <span className="uppercase tracking-widest text-blue-500">
            // Client Testimonial
          </span>
          <h1 className="mt-5 text-5xl leading-snug md:leading-none">
            Trusted by Worldwide <span className="text-blue-500">1200+</span>
            <br />
            Clients Since 2000
          </h1>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-0">
          <div className="border border-white pt-10">
            <div className="flex px-10 pb-10">
              <div className="mr-5 h-20 w-20 overflow-hidden rounded-full">
                <img src={blueMan} className="h-[90px] w-[90px]" />
              </div>
              <div>
                <h1 className="text-2xl">John Anthony</h1>
                <p className="text-xl text-gray-400">CEO & Founder</p>
              </div>
            </div>
            <div className="px-10 text-gray-400">
              <p className="text-xl">
                Great Supports. It's Radidiously strategize effective
                technologies extensive supply chains. Completely morph's
                compelling whereas prospective web Services parallel alignments.
              </p>
            </div>
            <div className="mt-10 flex h-20 justify-between bg-[#0e1935] px-10 pt-6">
              <div className="w-24">
                <img src={amazonLogo} width={"100%"} />
              </div>
              <div className="mr-16 flex h-6 w-16">
                {Array.from({ length: 5 }).map(() => {
                  return <img src={star} width={"100%"} className="mr-1" />;
                })}
              </div>
            </div>
          </div>
          <div className="border border-white pt-10">
            <div className="flex px-10 pb-10">
              <div className="mr-5 h-20 w-20 overflow-hidden rounded-full">
                <img src={orangeMan} className="h-[90px]" />
              </div>
              <div>
                <h1 className="text-2xl">Mark Ferdinand</h1>
                <p className="text-xl text-gray-400">Social Marketer</p>
              </div>
            </div>
            <div className="px-10 text-gray-400">
              <p className="text-xl">
                Great Supports. It's Radidiously strategize effective
                technologies extensive supply chains. Completely morph's
                compelling whereas prospective web Services parallel alignments.
              </p>
            </div>
            <div className="mt-10 flex h-20 justify-between bg-[#0e1935] px-10 pt-6">
              <div className="w-24">
                <img src={gooleLogo} width={"100%"} />
              </div>
              <div className="mr-16 flex h-6 w-16">
                {Array.from({ length: 5 }).map(() => {
                  return <img src={star} width={"100%"} className="mr-1" />;
                })}
              </div>
            </div>
          </div>
          <div className="border border-white pt-10">
            <div className="flex px-10 pb-10">
              <div className="mr-5 h-20 w-20 overflow-hidden rounded-full">
                <img src={greenMan} className="h-[90px]" />
              </div>
              <div>
                <h1 className="text-2xl">James Hancock</h1>
                <p className="text-xl text-gray-400">Marketer Dr.</p>
              </div>
            </div>
            <div className="px-10 text-gray-400">
              <p className="text-xl">
                Great Supports. It's Radidiously strategize effective
                technologies extensive supply chains. Completely morph's
                compelling whereas prospective web Services parallel alignments.
              </p>
            </div>
            <div className="mt-10 flex h-20 justify-between bg-[#0e1935] px-10 pt-6">
              <div className="w-24">
                <img src={amazonLogo} width={"100%"} />
              </div>
              <div className="mr-16 flex h-6 w-16">
                {Array.from({ length: 5 }).map(() => {
                  return <img src={star} width={"100%"} className="mr-1" />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid py-7 md:py-0 h-96 grid-cols-3 content-center gap-10 bg-blue-500 px-10">
        <div className="flex h-28 md:h-60 content-center justify-center rounded-[0.5rem] bg-white">
          <img src={Brand1} />
        </div>
        <div className="flex h-28 md:h-60 content-center justify-center rounded-[0.5rem] bg-white">
          <img src={Brand2} />
        </div>
        <div className="flex h-28 md:h-60 content-center justify-center rounded-[0.5rem] bg-white">
          <img src={Brand3} />
        </div>
      </section>
      <section className="md:h-[1150px] md:px-24 md:pt-32 px-10 pt-16">
        <div className="md:flex justify-between">
          <div>
            <span className="uppercase tracking-widest text-blue-500">
              // News & Blogs
            </span>
            <h1 className="mt-5 text-5xl leading-snug md:leading-none">
              Latest Posts and <span className="text-blue-500">Insights </span>
              From <br className="hidden md:inline-block"/>
              Our Blogs
            </h1>
          </div>
          <div className="md:pt-20 pt-10">
            <i
              href="#"
              className="rounded-full bg-blue-600 px-12 py-6 not-italic"
            >
              View All Blogs
              <i class="fa-solid fa-arrow-right ml-2 rotate-[315deg]"></i>
            </i>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 md:pb-0 md:gap-5">
          <div className="md:h-[42rem] border border-gray-800 bg-[#010e2a]">
            <div className="md:h-96 overflow-hidden">
              <img src={blog1} width={"100%"} height={"100%"} />
            </div>
            <div>
              <div className="p-5">
                <div>
                  <img
                    src={favorite}
                    className="-mt-8 mr-1 inline-block h-7 opacity-80"
                  />
                  <p className="inline-block text-xl text-gray-400">
                    Business <br /> Web Design
                  </p>
                </div>
                <h1 className="mt-5 md:mt-3 text-2xl">
                  Easy Innovation Using Best Software Company
                </h1>
                <p className="mt-5 md:mt-5 text-xl text-gray-400">
                  There are many variatations of passanges of Lorem Ipsum
                  available,
                </p>
              </div>
              <hr className="mt-10 border border-gray-800" />
              <div className="flex h-16 justify-between">
                <h1 className="ml-5 mt-5">Continue Reading</h1>
                <i class="fa-solid fa-arrow-right ml-2 mr-5 mt-5 rotate-[315deg] opacity-50"></i>
              </div>
            </div>
          </div>
          <div className="md:h-[40rem] border border-gray-800 bg-[#010e2a]">
            <div className="md:h-96 overflow-hidden">
              <img src={blog2} width={"100%"} height={"100%"} />
            </div>
            <div className="p-5">
              <div>
                <img
                  src={favorite}
                  className="mr-1 inline-block h-7 opacity-80"
                />
                <p className="inline-block text-xl text-gray-400">Web Design</p>
              </div>
              <h1 className="mt-3 text-2xl mt-5">
                A Quick Solutions For Daily Problem
              </h1>
              <p className="mt-2 text-xl text-gray-400">
                There are many variatations of passanges of Lorem Ipsum
                available,
              </p>
            </div>
            <hr className="mt-10 border border-gray-800" />
            <div className="flex h-16 justify-between">
              <h1 className="ml-5 mt-5">Continue Reading</h1>
              <i class="fa-solid fa-arrow-right mr-5 mt-5 rotate-[315deg] opacity-50"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="footerbg md:flex h-[33rem]">
        <div className="h-full md:w-[25%] pl-10 md:pt-28 pt-10">
          <div>
            <img src={logo} />
            <p className="mt-10 text-xl text-gray-400">
              Lesires to obtain pain of itself because pain, but occasionally
              cirumstances.
            </p>
            <div className="mt-10 flex">
              <div className="mr-2 inline-block h-16 w-16 rounded-full bg-[#131b34] p-5">
                <img src={facebook} width={"7px"} className="ml-1 mt-1" />
              </div>
              <div className="mr-2 inline-block h-16 w-16 rounded-full bg-[#131b34] p-5">
                <img src={twitter} width={"16px"} className="ml-1 mt-1" />
              </div>
              <div className="mr-2 inline-block h-16 w-16 rounded-full bg-[#131b34] p-5">
                <img src={linkdin} width={"16px"} className="ml-1 mt-1" />
              </div>
              <div className="mr-2 inline-block h-16 w-16 rounded-full bg-[#131b34] p-5">
                <img src={pinterest} width={"16px"} className="ml-1 mt-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid h-full md:w-[75%] md:grid-cols-3 justify-center">
          <div className="h-full pt-10 md:pt-24 pl-20 md:pl-0">
            <h1 className="text-3xl">Quick Links</h1>
            <ul className="mt-10">
              <li className="mt-3 text-xl text-gray-400">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginRight: "10px" }}
                />
                Home
              </li>
              <li className="mt-3 text-xl text-gray-400">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginRight: "10px" }}
                />
                About Us
              </li>
              <li className="mt-3 text-xl text-gray-400">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginRight: "10px" }}
                />
                Blog Page
              </li>
              <li className="mt-3 text-xl text-gray-400">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginRight: "10px" }}
                />
                Terms & Conditions
              </li>
              <li className="mt-3 text-xl text-gray-400">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginRight: "10px" }}
                />
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="h-full pt-10 md:pt-24 pl-20 md:pl-0">
            <h1 className="text-3xl">Community</h1>
            <ul className="mt-10">
              <li className="mt-3 text-xl text-gray-400">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginRight: "10px" }}
                />
                Help Center
              </li>
              <li className="mt-3 text-xl text-gray-400">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginRight: "10px" }}
                />
                Customers
              </li>
              <li className="mt-3 text-xl text-gray-400">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginRight: "10px" }}
                />
                Downloads
              </li>
              <li className="mt-3 text-xl text-gray-400">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginRight: "10px" }}
                />
                Newsletter
              </li>
              <li className="mt-3 text-xl text-gray-400">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginRight: "10px" }}
                />
                Career
              </li>
            </ul>
          </div>
          <div className="h-full pt-10 md:pt-24 pl-20 md:pl-0">
            <h1 className="text-3xl">Contact</h1>
            <ul className="mt-10">
              <p className="mb-7 text-xl text-gray-400">
                88 Broklyn Street, 600 New <br /> York,USA
              </p>
              <li className="mt-3 text-xl text-gray-400">
                <img
                  src={worldWide}
                  width={"25px"}
                  className="mr-2 inline-block"
                />
                www.yourweb.com
              </li>
              <li className="mt-3 text-xl text-gray-400">
                <img
                  src={message}
                  width={"25px"}
                  className="mr-2 inline-block"
                />
                example@gmail.com
              </li>
              <li className="mt-3 text-xl text-gray-400">
                <img src={phone} width={"25px"} className="mr-2 inline-block" />
                202-555-0184
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex h-[6rem] justify-center pb-7 md:pb-0">
        <p className="mt-8 text-xl text-gray-400">
          Copyright @ 2024 Solute | Powered by Solute
        </p>
      </section>
    </>
  );
};

export default Index;
