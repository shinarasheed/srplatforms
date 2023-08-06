import React from "react"
import banner1 from "../images/compliance.png"
import banner2 from "../images/grievance.jpg"
import banner3 from "../images/ethics.jpg"
import banner4 from "../images/humanrights.jpg"

import "../styles/complaince.scss"

const statement1 = (
  <ul className="compliance-methods">
    <li>
      <p>
        When transiting the Gulf of Guinea, it is critical that ship-owners and
        charterers firmly understand the following vital information when
        considering the use of armed security: It is illegal for Private
        Maritime Security Companies to carry firearms in any of the West African
        territorial waters, Nigeria, (Lagos & Port Harcourt), Togo, (Lome),
        Benin, (Cotonou) and Ghana, (Accra & Tema). It is also illegal for
        Private Maritime Security Companies to transit firearms through any of
        these countries.
      </p>
    </li>
    <li>
      <p>
        Any armed security personnel inside of these countries’ territorial
        waters must be serving members of the National Armed Forces. The
        National Armed Forces of the respective countries will not carry
        insurance for their personnel on-board commercial shipping tasks,
        SRPLATFORMS take this responsibility instead and ensure that all
        personnel operate professionally and efficiently in order to mitigate
        any risks.
      </p>
    </li>
  </ul>
)

const statement2 = (
  <ul className="compliance-methods">
    <li>
      <p>
        Establish procedures for their personnel and for third parties to report
        allegations of improper and/or illegal conduct to designated personnel,
        including such acts or omissions that would violate the principles
        contained in this Code. Procedures must be fair, accessible and offer
        effective remedies, including recommendations for the prevention of
        recurrence. They shall also facilitate reporting by persons with reason
        to believe that improper or illegal conduct, or a violation of this
        Code, has occurred or is about to occur, of such conduct, to designated
        individuals within a Company and, where appropriate, to competent
        authorities;
      </p>
    </li>
    <li>
      <p>
        Investigate allegations promptly, impartially and with due consideration
        to confidentiality;
      </p>
    </li>
    <li>
      <p>
        Keep records about any such allegations, findings or disciplinary
        measures. Except where prohibited or protected by applicable law, such
        records should be made available to a Competent Authority on request;
      </p>
    </li>

    <li>
      <p>
        Cooperate with official investigations, and not participate in or
        tolerate from their personnel, the impeding of witnesses, testimony or
        investigations;
      </p>
    </li>

    <li>
      <p>
        Take appropriate disciplinary action, which could include termination of
        employment in case of a finding of such violations or unlawful
        behaviour; and Ensure that their personnel who report wrongdoings in
        good faith are provided protection against any retaliation for making
        such reports, such as shielding them from unwarranted or otherwise
        inappropriate disciplinary measures, and that matters raised are
        examined and acted upon without undue delay.
      </p>
    </li>

    <li>
      <p>
        We are committed to providing high quality services to all our Clients.
        When something goes wrong, we need you to tell us about it. This will
        help us to meet your dissatisfaction and to improve our service to all
        Clients. If you have a complaint, please email{" "}
        <a
          style={{ color: "#0d3a64", fontWeight: "bold" }}
          href="mailto:info@srplatforms.com?subject='Grievance'"
        >
          info@srplatforms.com
        </a>
      </p>
    </li>
  </ul>
)

const statement3 = (
  <ul className="compliance-methods">
    <li>
      <p>
        We take a strategic approach to respecting human rights. This recognizes
        the potentially positive and negative impacts of our operations, the
        particular nature of our business as a security company, the UN
        framework and the different geographies in which we operate.
      </p>
    </li>
    <li>
      <p>
        We believe that high standards of ethical conduct and those
        organizations with the highest ethical standards will have the most
        positive impact on the lives of those
      </p>
      <p>
        around them and ultimately, will be the most successful. Using human
        rights to guide our operations has several benefits:
      </p>
    </li>
    <li>
      <p>
        Employees can be sure that they are working with a good company that
        respects their human rights and has a positive impact on society,
        through the conduct of its people.
      </p>
    </li>
    <li>
      <p>
        Clients can be confident that they are working with a company that
        respects and operates to global human rights and ethical standards and
        will not compromise the client’s reputation as a result of unethical
        conduct.
      </p>
    </li>
    <li>
      <p>
        Partners and suppliers can be confident that any business venture
        entered into with SR PLATFORMS will be conducted on the basis of strong
        human rights and ethical principles and that any behavior which is not
        in line with the Policy will not be tolerated.
      </p>
    </li>
    <li>
      <p>
        Communities can be assured that SR PLATFORMS will have a positive impact
        on the local community in which it operates and will respect SR
        PLATFORMS as a decent company that operates ethically and contributes
        positively to the human rights of the local community. The Human Rights
        Policy in full, is available on request.
      </p>
    </li>
  </ul>
)

export default [
  {
    title: "Compliance",
    banner: banner1,
    description: statement1,
  },

  {
    title: "Grievance",
    banner: banner2,
    description: statement2,
  },

  {
    title: "Business Ethics Statement",
    banner: banner3,
    description:
      "When transiting the Gulf of Guinea, it is critical that ship-owners and charterers firmly understand the following vital information when considering the use of armed security: It is illegal for Private Maritime Security Companies to carry firearms in any of the West African territorial waters, Nigeria, (Lagos & Port Harcourt), Togo, (Lome), Benin, (Cotonou) and Ghana, (Accra & Tema). It is also illegal for Private Maritime Security Companies to transit firearms through any of these countries. Any armed security personnel inside of these countries’ territorial waters must be serving members of the National Armed Forces. The National Armed Forces of the respective countries will not carry insurance for their personnel on-board commercial shipping tasks, SRPLATFORMS take this responsibility instead and ensure that all personnel operate professionally and efficiently in order to mitigate any risks.",
  },
  {
    title: "Human Rights Statement",
    banner: banner4,
    description: statement3,
  },
]
