'use client'
import React from 'react';
import Navbar from '../navbar'; // Ensure the path is correct
import TimelineItem, { TimelineItemProps } from '../timeline'; // Ensure the path is correct
import 'app/global.css'; // Ensure the path is correct

const osItems = [
  {
    id: 1,
    title: 'Public Charity',
    content: `
      Definition: An organization that receives a substantial portion of its funding from the general public, government grants, or other public sources.
      Tax Code: Section 501(c)(3)
      Impact: Public charities can drive mission-driven innovation by focusing on public health needs and ensuring accessibility. However, limited financial resources may constrain large-scale R&D and innovation.
      Examples: American Red Cross, St. Jude Children’s Research Hospital, Doctors Without Borders
      Characteristics: Funding Sources - At least one-third from public sources ∙ Public Support Test - Must pass to maintain status ∙ Activities - Operate direct services (e.g., schools, hospitals) ∙ Board of Directors - Broad-based and community-involved ∙ Tax Benefits - Contributions deductible up to 60% of AGI ∙ Regulation - Stringent, focused on public interest.
    `
  },
  {
    id: 2,
    title: 'Private Charity (Private Foundation)',
    content: `
      Definition: An organization typically funded by a single source or small group of sources.
      Tax Code: Section 501(c)(3)
      Impact: Private foundations can ensure long-term funding and focus on niche areas of public interest. However, they may lack the financial dynamics and competitive drive of publicly traded corporations.
      Examples: Bill & Melinda Gates Foundation, Howard Hughes Medical Institute, Rockefeller Foundation
      Characteristics: Funding Sources - Mainly from one source or family ∙ Public Support Test - Not required ∙ Activities - Often grant-making rather than direct operations ∙ Board of Directors - Smaller, centralized, often family ∙ Tax Benefits - Contributions deductible up to 30% of AGI ∙ Regulation - Specific rules on self-dealing, distributions, and political activities.
    `
  },
  {
    id: 3,
    title: 'Charitable Trust',
    content: `
      Definition: A trust created to achieve a charitable purpose.
      Tax Code: Sections 4947(a)(1) for charitable remainder trusts and 4947(a)(2) for other charitable trusts
      Impact: Charitable trusts can ensure sustained funding and alignment with public interest goals. Their structure can promote bioethics and mission-driven innovation but may not be agile enough to compete in a fast-paced market.
      Examples: The Pew Charitable Trusts, The Wellcome Trust, Charitable Remainder Unitrusts (various)
      Characteristics: Funding Sources - Can be funded by individuals, families, or other donors ∙ Types - Charitable Remainder Trusts: Provide income to beneficiaries for a period, with remaining assets going to charity. Charitable Lead Trusts: Provide income to charity for a period, with remaining assets going to beneficiaries ∙ Activities - Trust assets managed to benefit charitable purposes ∙ Trustee - Managed by trustees who have fiduciary responsibilities ∙ Tax Benefits - Donors can receive income tax deductions, estate, and gift tax benefits ∙ Regulation - Subject to specific rules regarding distributions and tax benefits depending on the type of trust.
    `
  },
  {
    id: 4,
    title: 'Donor-Advised Fund (DAF)',
    content: `
      Definition: A philanthropic vehicle established at a public charity.
      Tax Code: Section 4966
      Impact: DAFs offer flexibility and immediate funding potential, allowing for rapid response to emerging health needs. However, the lack of direct control over operational activities can limit their impact on long-term pharmaceutical innovation.
      Examples: Fidelity Charitable, Schwab Charitable, National Philanthropic Trust
      Characteristics: Funding Sources - Funded by donors who retain advisory privileges ∙ Activities - Donors recommend grants to other charities ∙ Sponsor - Managed by public charities or financial institutions ∙ Tax Benefits - Immediate tax deductions at the time of donation ∙ Regulation - Managed by the sponsoring organization with oversight.
    `
  },
  {
    id: 5,
    title: 'Supporting Organization',
    content: `
      Definition: A charity that supports one or more public charities.
      Tax Code: Section 509(a)(3)
      Impact: Supporting organizations can channel resources efficiently towards public health goals, ensuring alignment with bioethical standards. However, their dependence on the parent charity may limit their operational scope and innovation capacity.
      Examples: The Annie E. Casey Foundation, The Ford Foundation
      Characteristics: Funding Sources - Usually aligned with the supported public charity ∙ Activities - Supports and benefits the public charity ∙ Board of Directors - Often involves representatives from the supported organization ∙ Tax Benefits - Contributions deductible as with public charities ∙ Regulation - Specific rules ensuring the support and benefit relationship.
    `
  },
  {
    id: 6,
    title: 'Publicly Traded Corporation',
    content: `
      Definition: A for-profit company whose shares are traded openly on stock exchanges.
      Impact: Publicly traded corporations drive innovation and large-scale R&D through significant financial resources and competitive dynamics. However, the focus on profit margins may sometimes conflict with broader public health goals.
      Examples: Pfizer, Johnson & Johnson, Merck
      Characteristics: Ownership - Shareholders who invest in the company's stock ∙ Funding Sources - Capital from stock sales and investments ∙ Activities - Operate to maximize profits for shareholders ∙ Board of Directors - Elected by shareholders, focused on maximizing shareholder value ∙ Tax Benefits - Eligible for various business tax deductions ∙ Regulation - Governed by securities regulations and stock exchange rules.
    `
  },
  {
    id: 7,
    title: 'Private Corporation',
    content: `
      Definition: A for-profit company privately owned and not traded on public stock exchanges.
      Impact: Private corporations can focus on long-term projects without the pressure of quarterly earnings reports. This can foster innovative approaches but may lack the transparency and capital access of publicly traded companies.
      Examples: Cargill, Koch Industries, Mars, Inc.
      Characteristics: Ownership - Typically owned by founders, families, or a small group of investors ∙ Funding Sources - Private investments, retained earnings ∙ Activities - Operate to generate profits for owners ∙ Board of Directors - Appointed by owners, more flexibility in decision-making ∙ Tax Benefits - Eligible for various business tax deductions ∙ Regulation - Fewer public reporting requirements compared to publicly traded corporations.
    `
  },
  {
    id: 8,
    title: 'Benefit Corporation (B Corp)',
    content: `
      Definition: A type of for-profit corporate entity that includes positive impact on society, workers, the community, and the environment in addition to profit as its legally defined goals.
      Impact: Benefit corporations can balance innovation with ethical considerations, focusing on mission-driven goals alongside profitability. They may face challenges in scaling compared to traditional for-profit entities but offer a sustainable model for ethical innovation.
      Examples: Patagonia, Ben & Jerry's, Warby Parker
      Characteristics: Ownership - Shareholders who are committed to both profit and social/environmental impact ∙ Funding Sources - Investments from socially responsible investors ∙ Tax Benefits - Standard corporate tax deductions ∙ Regulation - Must meet certain standards of social and environmental performance, accountability, and transparency.
    `
  }
];

const finItems: TimelineItemProps[] = [
  { id: 1, title: 'Institutional Investment', content: `
Overview: Few investment firms own large stakes in many biotech/pharma companies
Source: 
` },
{ id: 2, title: 'Institutional Investment', content: `
Overview: Few investment firms own large stakes in many biotech/pharma companies
Source: 
` },
{ id: 3, title: 'Institutional Investment', content: `
Overview: Few investment firms own large stakes in many biotech/pharma companies
Source: 
` },
];

const sentItems: TimelineItemProps[] = [
  { id: 2, title: 'Physicians Against Corporate Pharma', content: `
Overview: Many doctors believe that pharma’s corporate ownership worsens the patient care system.
Source: 
` },
  { id: 2, title: 'Physicians Against Corporate Pharma', content: `
Overview: Many doctors believe that pharma’s corporate ownership worsens the patient care system.
Source: 
` },
{ id: 2, title: 'Physicians Against Corporate Pharma', content: `
Overview: Many doctors believe that pharma’s corporate ownership worsens the patient care system.
Source: 
` },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-content">
          <h1 className="mb-4 text-4xl font-bold ml-4">How Ownership Shapes the Biotech and Pharma Industries: A Survey on Innovation, Ethics, and Public Health</h1>
          <h1 className="ml-4 mb-4 text-2xl font-bold">Overview</h1>
          <p className='text-lg ml-4 mb-4'>To see where you stand on the following nuanced issues, answer the survey without additional information. Next, explore the impact of ownership structures alongside bioethics, mission-driven innovation, and financial dynamics on the biotechnology and pharmaceutical industries to gauge the landscape.
          </p>
<p className="text-lg ml-4 mb-4">
  Consider the importance of biologics and pharmaceuticals to the mass market while answering:
</p>
<ul className="list-disc list-inside ml-8 mb-4">
  <li>Who should be in charge? Should it be non-profits to ensure public interests, or publicly traded corporations to maximize innovation and profits?</li>
  <li>Should marketing expenses be as strictly regulated as drug discovery and R&D?</li>
  <li>In the age of AI, should there be more public oversight and transparency in the process?</li>
</ul>
        <h1 className="ml-4 mb-4 text-2xl font-bold">Ownership Structures</h1>
        <div className="timeline-container">
          <div id="timeline" className="timeline flex">
            {osItems.map(item => (
              <TimelineItem key={item.id} id={item.id} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
        <h1 className="ml-4 mt-8 mb-4 text-2xl font-bold">Financial Insights</h1>
        <div className="timeline-container">
          <div id="timeline" className="timeline flex">
            {finItems.map(item => (
              <TimelineItem key={item.id} id={item.id} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
        <h1 className="ml-4 mt-8 mb-4 text-2xl font-bold">Expert Sentiments</h1>
        <div className="timeline-container">
          <div id="timeline" className="timeline flex">
            {sentItems.map(item => (
              <TimelineItem key={item.id} id={item.id} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
        <h1 className="ml-4 mt-8 mb-4 text-2xl font-bold">Case Study</h1>
<p className="mb-4 ml-4">
  Comparing Eli Lilly and Novo Nordisk highlights the impact of different ownership structures on pharmaceutical innovation and public health. Eli Lilly, a publicly traded corporation, focuses on maximizing profits and shareholder value, driving large-scale R&D and innovation. In contrast, Novo Nordisk, partially owned by a foundation, balances profit with public interest goals, ensuring a strong commitment to accessibility and long-term health outcomes.
</p>
      </main>
    </div>
  );
};

export default Home;
