import React from 'react';
import Navbar from '../navbar'; // Ensure the path is correct
import TimelineItem, { TimelineItemProps } from '../timeline'; // Ensure the path is correct
import 'app/global.css'; // Ensure the path is correct

const osItems: TimelineItemProps[] = [
  {
    id: 1,
    title: 'Government Bodies',
    content: `
      Definition: Regulatory agencies established by governments to enforce industry-specific laws and regulations.
      Examples: FDA (Food and Drug Administration), Ofcom (Office of Communications), SEC (Securities and Exchange Commission)
    `
  },
  {
    id: 2,
    title: 'Nonprofits, NGOs, and SROs',
    content: `
      Definition: Organizations that regulate industries, whether through governmental influence, public interest, ethical considerations, or self-regulation via standards, codes of conduct, or industry associations.
      Examples: International Organization for Standardization (ISO), The Nature Conservancy, Amnesty International
    `
  },
  {
    id: 3,
    title: 'Companies in Regulatory Roles',
    content: `
      Definition: Companies involved in regulatory roles within their industries, often through compliance with standards and legal requirements.
      Examples: Ginkgo Bioworks (biotech), Shell (energy), Microsoft (technology)
    `
  }
];

const finItems: TimelineItemProps[] = [
  { 
    id: 1, 
    title: 'State Backing', 
    content: `
    Bayh-Dole Act of 1980: Through this legislation, the NIH was able to directly fund research dependent industries; the rate of funding subsequently increased at an average rate of 2.9% per year till the mid-2000s where it became more than half of non-defense public R&D [30][31]. By then, the four largest biotech companies—Genentech, Biogen, Idex, and Serono—derived 90% of their revenue from drugs that were advantaged by the Act [29]. This funding has been highly effective for the biotech industry—Vallas et al. (2011) estimate that 13 of the 15 blockbuster biotech drugs available in 2007 received NIH support during their early development stages.
    `
  },
  { 
    id: 3, 
    title: 'Test', 
    content: `
      Overview: Test
    `
  },
  { 
    id: 3, 
    title: 'Institutional Investment', 
    content: `
    Network of Investments: Few investment firms own large stakes in many biotech/pharma companies
    `,
    imageUrl: '/investment_firms.png'
  },
];

const sentItems: TimelineItemProps[] = [
  { id: 2, title: 'Physicians Against Corporate Pharma', content: `
Overview: Many doctors believe that pharma’s corporate ownership worsens the patient care system.
` },
  { id: 2, title: 'Test', content: `
Overview: Test
` },
{ id: 2, title: 'Test', content: `
Overview: Test
` },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-content">
        <meta name="viewport" content="width=device-width" />
        <h1 className="mb-4 text-4xl font-bold ml-4">How Ownership Shapes the Biotech and Pharma Industries: A Survey on Ethics and Public Health</h1>
        <p className="text-sm ml-4 mb-6">Tejjas Kaul</p>
        <div className="img-container">         
          <img
            src="/ncssm.png"
            alt="ncssm"
            className="max-w-full h-auto sm:max-w-md lg:max-w-l pl-5"
          />
        </div>
        <br />
        <h1 className="ml-4 mb-4 text-2xl font-bold">Abstract</h1>
        <p className="text-lg ml-4 mb-4">
          This study explores how ownership structures shape ethical practices and market dynamics in the biotech and pharmaceutical industries. It examines regulatory bodies, nonprofits, NGOs, and corporate entities to analyze their roles in setting industry standards and impacting public health outcomes. The findings highlight the intricate relationship between ownership, ethics, and industry behavior, emphasizing the need for informed governance to maximize societal benefits.
        </p>
        <h1 className="ml-4 mb-4 text-2xl font-bold">Overview</h1>
        <p className="text-lg ml-4 mb-4">
          To understand your position on this complex issue, take the survey without any additional insights. Then, explore a meta analysis of ownership structures, bioethics, and financial dynamics that influence the biotech and pharmaceutical industries to get a clearer picture.
        </p>
        <p className="text-lg ml-4 mb-4">
        [Google Form Embed] Pre-Survey: Given the importance of biologics and pharmaceuticals to the mass market, who should steer these industries?
        </p>
        <ul className="list-disc list-inside ml-8 mb-4">
          <li>Government Bodies</li>
          <li>Nonprofits, NGOs, and SROs</li>
          <li>Companies in Regulatory Roles</li>
        </ul>
        <h1 className="ml-4 mb-4 text-2xl font-bold">Market Regulators</h1>
        <div className="timeline-container">
          <div id="timeline" className="timeline flex">
            {osItems.map(item => (
              <TimelineItem key={item.id} id={item.id} title={item.title} content={item.content} imageUrl={item.imageUrl} />
            ))}
          </div>
        </div>
        <h1 className="ml-4 mt-8 mb-4 text-2xl font-bold">Financial Insights</h1>
        <div className="timeline-container">
          <div id="timeline" className="timeline flex">
            {finItems.map(item => (
              <TimelineItem key={item.id} id={item.id} title={item.title} content={item.content} imageUrl={item.imageUrl} />
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
          Comparing Eli Lilly (USA) and Novo Nordisk (Denmark) highlights the impact of different ownership structures on pharmaceutical innovation and public health. Eli Lilly, a publicly traded corporation, focuses on maximizing profits and shareholder value, driving large-scale R&D and innovation. In contrast, Novo Nordisk, partially owned by a foundation, balances profit with public interest goals, ensuring a strong commitment to accessibility and long-term health outcomes.
        </p>
        <p className="text-lg ml-4 mb-4">
          [Google Form Embed] Post-Survey: After reviewing this material, who should steer these industries?
        </p>
        <ul className="list-disc list-inside ml-8 mb-4">
          <li>Government Bodies</li>
          <li>Nonprofits, NGOs, and SROs</li>
          <li>Companies in Regulatory Roles</li>
        </ul>
        <h1 className="ml-4 mt-8 mb-4 text-2xl font-bold">References</h1>
        <p className="text-lg ml-4 mb-4">
          1:
          <br />
          2:
          <br />
          3:
          <br />
        </p>
      </main>
    </div>
  );
};

export default Home;
