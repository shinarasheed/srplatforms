import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class CerticateSlide extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div>
        <Slider {...settings}>
          <article className="d-flex slide">
            <div className="slideLeft">
              <h5>Mr. Babatunde Aiyenuro </h5>
              <p> Managing Director/Chief Executive Officer</p>
            </div>
            <div className="slideRight">
              <p>
                Babatunde Aiyenuro is the Managing Director of SR Platforms
                Limited, Africa's leading indigenous Shipping Company engaged in
                the provision of Marine and Offshore support services. He has
                almost three decades cognate experience in the Shipping
                lndustry. Prior to incorporation of SR Platforms Limited, he had
                worked in Basse Oil and Gas Limited, where he built a strong
                reputation as a reference resource professional in International
                Oil Trading and Shipping. He has a Bachelor of Science in
                Business Administration from the University of Lagos, Nigeria
                and also attended various Leadership & Ship Management courses.
                He is a member of the lnstitute of Strategic Management of
                Nigeria, lkoyi Club and Nigerian Chambers of Shipping
              </p>
            </div>
          </article>

          <article className="d-flex slide">
            <div className="slideLeft">
              <h5>Mrs. Bolanle Aiyenuro</h5>
              <p>Executive Director</p>
            </div>
            <div className="slideRight">
              <p>
                She graduated from the University of Maiduguri, where she
                obtained a Bachelor Degree in Political Science. She acquired
                skills in Business and Strategic Management through various long
                distance courses. Prior to assuming the position of Executive
                Director, Mrs. Aiyenuro worked in the Banking lndustry where she
                honed her skills in Banking Operations, Marketing and Business
                Development. She is a member of the lnstitute of Strategic
                Management of Nigeria, lkoyi Club and Women in Management,
                Business and Public Service.
              </p>
            </div>
          </article>
          <article className="d-flex slide">
            <div className="slideLeft">
              <h5>Ismail Owolabi Hameed</h5>
              <p>Chief financial /Operating officer</p>
            </div>
            <div className="slideRight">
              <p>
                {" "}
                Prior to joining the company, he was the Managing Partner of
                Owolabi Hameed &amp; Co (Chartered Accountants) and Allswell
                Consulting Services with focus on Bookkeeping and Accountancy,
                Tax Management, Financial and Business Advisory Services. He
                acquired demonstrated competencies in his focus areas through
                job engagements with establishments in Information Technology,
                Telecommunications support service, Trading, Real Estate, Oil
                &amp; Gas (downstream), Maritime, Insurance and Logistics.
                Hameed worked in Sterling Bank, former Gateway Bank and Afribank
                for over 15 years. While in the banking industry, he served as
                Head of branch operations...
              </p>
            </div>
          </article>

          <article className="d-flex slide">
            <div className="slideLeft">
              <h5>Engr. Yahaya O. Odesanmi</h5>
              <p>General Manager, Technical</p>
            </div>
            <div className="slideRight">
              <p>
                He graduated from Federal College of Fisheries & Marine Tech.
                Lagos, where he obtained a Diploma in Marine Engineering;
                thereafter he went to Maritime & Port Authority of Singapore
                where he obtained Class 1 Certificate of Competency in Maritime
                operations. Apart from the above mentioned academic
                certification, he also has several maritime related trainings
                and courses from world leading institutions like South Tyneside
                College, Llyod’s Maritime Academy , London, Lyod’s Register –
                UAE etc where he obtained certificates on Manila Convention
                Compliance courses , International Safety Management code (ISM),
                Designated personnel ashore (DPA)Company Safety Officer (CSO)...
              </p>
            </div>
          </article>
          <article className="d-flex slide">
            <div className="slideLeft">
              <h5> Engr. Benson Abiri</h5>
              <p>Marine Superintendent</p>
            </div>
            <div className="slideRight">
              <p>
                {" "}
                An experienced Marine Engineer that has served in different
                capacity on various types of vessels. He holds class III/II
                certificate of competency issued by MCA UK. He completed his Coc
                preps. at South Shields Marine School and holds other relevant
                marine training certificates from South Africa and Ghana. He
                holds diploma in shipping and logistics management from Nigeria
                Institute of Shipping with PGD in Maritime Management.{" "}
              </p>
            </div>
          </article>

          <article className="d-flex slide">
            <div className="slideLeft">
              <h5>Olayinka Agoro</h5>
              <p>Vessel Manager</p>
            </div>
            <div className="slideRight">
              <p>
                She graduated from Maritime Academy of Nigeria, Oron in 2004
                where she obtained a National Diploma in Marine Engineering,
                then to Regional Maritime University (RMU) Ghana where she had
                her professional certificates in Maritime Safety Operation, she
                then obtained a class III C.O.C in Marine Engineering from
                Maritime Academy of Nigeria Oron in 2018 . She has a sound
                Safety and Operation certificates in Quality Management System,
                Ass. Member IOSH, Ass. Member OGSC and also has a certificate in
                Offshore Supply Vessel Manoeurving, Olayinka has a sea-going
                experience for 6years and also Managed Offshore Sea Going vessel
                as a Marine Recruitment Officer at Seashore Offshore...
              </p>
            </div>
          </article>

          <article className="d-flex slide">
            <div className="slideLeft">
              <h5>Ajayi Modupe O.</h5>
              <p>Head of Finance</p>
            </div>
            <div className="slideRight">
              <p>
                She is a seasoned Accountant and a Fellow Member of the
                Institute of Chartered Accountants of Nigeria, Member of
                Association of Chartered Certified Accountants United Kingdom.
                She served as an Accounts officer at Golden Securities Ltd in
                2003 after graduation and thereafer an Audit Senior / Tax
                consultant with MBO Russell Bedford (Chartered Accountants) from
                2003 to Feb 2007 She joined Archetype Energy Services Ltd in
                2007 as Finance Manager, where she rose to the post of the Head
                of Finance.{" "}
              </p>
            </div>
          </article>
          <article className="d-flex slide">
            <div className="slideLeft">
              <h5> Olatunde Gbolahan</h5>
              <p>Head of Shipping & Logistics Manager</p>
            </div>
            <div className="slideRight">
              <p>
                {" "}
                He holds a B. Eng. in Chemical Engineering from University of
                Benin. He served as a Petroleum Inspector with Q&Q Control
                Service Ltd 2007 - 2010. He joined Sar-petro Marine Ltd in 2011
                as a Shipping Logistics Officer, where he rose up to the post of
                a Shipping Logistics Executive, before joining SR Platforms Ltd
                in the year 2014, as Shipping Logistics Manager. Having joined
                the Shipping line in 2005, Mr. Olatunde has undergone some
                maritime certificate courses amongst; Lloyds Maritime Academy -
                Certificate in Ship Operation, Nigerian Chamber of Shipping –
                Marine Safety and Water Survival Skill and Structural and
                Analysis Shipping.
              </p>
            </div>
          </article>
          <article className="d-flex slide">
            <div className="slideLeft">
              <h5> Oladapo Adeworan</h5>
              <p>Business Development Manager</p>
            </div>
            <div className="slideRight">
              <p>
                {" "}
                A dynamic and resourceful personality with over 15years
                experience in Marine, Ship management, Business Development,
                supplier procurement and Supply Chain functions. He started his
                career with Al-Fil Petroleum and Gas Ltd as a business
                Development Executive in which he was able to build the
                clientele base of the Company by over 200 %. He was later
                promoted to the Head of Sales and Marketing. He later joined
                PETRA-LOGISTICS Limited as Business Development Manager from
                where he built the company from inception turning it into a
                major marine trading and servicing company with an annual gross
                turnover in excess of N3.5 billion per annum...
              </p>
            </div>
          </article>
          <article className="d-flex slide">
            <div className="slideLeft">
              <h5> Ibrahim Hammed</h5>
              <p>HSE Manager</p>
            </div>
            <div className="slideRight">
              <p>
                {" "}
                A reliable administrator, has undergone courses in HSE LEVEL II
                &IIII , first aid , CPR, occupational health and Safety (NEBOSH)
                and gas safety and health supervisor (OSH Academy USA). A very
                thorough safety officer with good understanding of the Company’s
                high safety standards.
              </p>
            </div>
          </article>
          <article className="d-flex slide">
            <div className="slideLeft">
              <h5>Bukola Segunsola-Onakoya</h5>
              <p>Human Resources & Admin Manager</p>
            </div>
            <div className="slideRight">
              <p>
                {" "}
                An experienced administrator and human resources professional
                with a track record of increasing overall business
                effectiveness. 10+ years of experience gained in a variety of
                organizations, including advertising, oil and gas, retail, and,
                most recently, maritime. Holds a B.A in Media Arts from the
                University of Ibadan. A member of the Nigerian Institute of
                Management and the Chartered Institute of Personnel Management.
              </p>
            </div>
          </article>
        </Slider>
      </div>
    )
  }
}
