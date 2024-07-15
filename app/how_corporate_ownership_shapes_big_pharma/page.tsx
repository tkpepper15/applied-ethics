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
    title: 'Non-Governmental Organizations',
    content: `
      Definition: Organizations that regulate industries, whether through governmental influence, public interest, ethical considerations, or self-regulation (SROs) via standards, codes of conduct, or industry associations.
      Examples: Bill and Melinda Gates Foundation (public health), Ford Foundation (social justice), New York Stock Exchange (finance)
    `
  },
  {
    id: 3,
    title: 'Companies in Regulatory Roles',
    content: `
      Definition: Companies involved in regulatory roles within their industries, often through substantial market share and proprietary goods and services.
      Examples: Ginkgo Bioworks (biotech), Shell (energy), Nvidia (AI technology)
    `
  }
];


const finItems: TimelineItemProps[] = [
  { 
    id: 1, 
    title: 'Federal Funding', 
    content: `
    Bayh-Dole Act of 1980: Established a uniform patent policy for federal research funding agencies, allowing universities, small businesses, and nonprofits to retain ownership of inventions from federally funded research.
    • The rate of funding from the NIH increased at an average annual rate of 2.9% until the mid-2000s, when it exceeded half of non-defense public R&D [4]. 
    • By 2000, the four largest biotech companies—Genentech, Biogen, Idex, and Serono—derived 90% of their revenue from drugs that were advantaged by the Act [5]. 
    • Vallas et al. (2011) estimated that 13 of the 15 blockbuster biotech drugs available in 2007 received NIH support during their early development stages [6].
    `
  },
  { 
    id: 3, 
    title: 'Charitable Spending', 
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
  { id: 2, title: 'Government Bodies', content: `
Negative: 
Positive:
` },
  { id: 2, title: 'Non-Governmental Organizations', content: `
Negative:
Positive:
` },
{ id: 2, title: 'Companies in Regulatory Roles', content: `
Negative: Many doctors believe that pharma’s corporate ownership worsens the patient care system.
Positive:
` },
];

const Main: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-content">
        <meta name="viewport" content="width=device-width" />
        <h1 className="mb-4 text-4xl font-bold ml-4">How Market Regulators Shape the Biotech and Pharma Industries: A Survey on Ethics and Public Health</h1>
        <p className="text-sm ml-4 mb-6">Tejjas Kaul</p>
        <div className="pl-4">         
          <img
            src="./schools.png"
            alt="schools"
            width="250px"
          ></img>
        </div>
        <br />
        <h1 className="ml-4 mb-4 text-2xl font-bold">Abstract</h1>
        <div className="pr-4">         
        <p className="text-lg ml-4 mb-4">
          This study explores how the different categories of entities each shape ethical practices and market dynamics in the biotech and pharmaceutical industries. 
          It particularly examines regulatory bodies, independent regulators, and corporate entities to analyze their roles in setting industry standards and impacting public health outcomes. 
          To understand the public preception of the ideal entity to lead the charge, a pre-post survey is employed. 
          The results will then be analyzed to draw conclusions about the public preception of the drug industry and its catalysts. 
          The findings highlight the intricate relationship between the general public, ethics, and industry behavior, emphasizing the need for informed governance to maximize societal benefits. 
        </p>
        </div>
        <div className="responsive-iframe-container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe7EGYHxssSrXEp5NHdg3zIz-eiSmYkJYwP4feLeuX920nrPw/viewform?embedded=true">Loading…</iframe>
        </div>
        <br></br>
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
        <div className="pr-4">    
        <p className="mb-4 ml-4">
          Comparing Eli Lilly (USA) and Novo Nordisk (Denmark) highlights the impact of different ownership structures on pharmaceutical innovation and public health. Eli Lilly, a publicly traded corporation, focuses on maximizing profits and shareholder value, driving large-scale R&D and innovation. In contrast, Novo Nordisk, partially owned by a foundation, balances profit with public interest goals, ensuring a strong commitment to accessibility and long-term health outcomes.
        </p>
        </div>
        <h1 className="ml-4 mt-8 mb-4 text-2xl font-bold">References</h1>
        <div className="reference-box">    
        <p className="text-lg ml-4 mb-4">
[4] Boadi, Kwame. “Erosion of Funding for the National Institutes of Health Threatens U.S. Leadership in Biomedical Research” CAP (2014).
<br></br>
[5] Lazonick, William, and Öner Tulum. “US biopharmaceutical finance and the sustainability of the biotech business model.” Research Policy 40.9 (2011): 1170-1187.
<br></br>
[6] Vallas, Steven, Kleinman, Daniel and Biscotti, Dina. “Political Structures and the making of US Biotechnology” in State of Innovation: The U.S. Government&apos;s Role in Technology Development (2011). Paradigm Publishers.
<br></br>
        </p>
      </div>
      </main>
    </div>
  );
};

export default Main;
