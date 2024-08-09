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
    • The rate of funding from the NIH increased at an average annual rate of 2.9% until the mid-2000s, when it exceeded half of non-defense public R&D [2]. 
    • By 2000, the four largest biotech companies—Genentech, Biogen, Idex, and Serono—derived 90% of their revenue from drugs that were advantaged by the Act [3]. 
    • Vallas et al. (2011) estimated that 13 of the 15 blockbuster biotech drugs available in 2007 received NIH support during their early development stages [4].
    `
  },
  { 
    id: 3, 
    title: 'Charitable Spending', 
    content: `
    While foundations in the United States have managed to invest billions into pharma/biotech research, __
    Pitfalls of Direct Investment:
    • Nonprofits can't access the same investment channels as for-profits for R&D funding.
    • The FDA's user fees apply to all drug manufacturers, hindering nonprofit growth.
    • Current drug distribution networks favor high-priced drugs, disadvantaging nonprofits.
    • Medicare and Medicaid reimbursement policies conflict with nonprofits’ mission to offer lower-cost drugs.
    `
  },
  { 
    id: 3, 
    title: 'Institutional Investment', 
    content: `
    Network of Investments: Few investment firms own large stakes in many biotech/pharma companies as shown in the image below [1]: 
    `,
    imageUrl: '/investment_firms.png'
  },
];

const Main: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-content">
        <meta name="viewport" content="width=device-width" />
        <h1 className="mb-4 text-4xl font-bold ml-4">How Market Regulators Shape the Biotech and Pharma Industries: A Survey on Ethics and Public Health</h1>
        <p className="text-sm ml-4 mb-6">Tejjas Kaul</p>
        <div className="ml-4">
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
<strong>Background</strong>:
This study investigates the impact of various regulatory entities on ethical practices and market dynamics within the biotechnology and pharmaceutical industries in the United States. It examines the roles of government bodies, non-governmental organizations (NGOs), and corporate entities in setting industry standards and influencing public health outcomes.
<br></br>
<br></br>
<strong>Objective</strong>:
The research aims to understand public perception of the ideal regulatory entity through a pre-post survey methodology. 
<br></br>
<br></br>
<strong>Methods</strong>:
Data were collected through a mixed-methods approach, combining qualitative analysis of legal documents and quantitative data. A case study comparing Eli Lilly (USA) and Novo Nordisk (Denmark) illustrates the impact of different ownership structures on regulatory practices. The results were visualized through an interactive dashboard, enhancing user experience and accessibility.
<br></br>
<br></br>
<strong>Results</strong>:
By analyzing the survey design, the study highlights the public&apos;s views on the ethical behavior of different regulators and their preference for those prioritizing public health over profit. The findings underscore the intricate relationship between public sentiment, ethical governance, and industry behavior.
<br></br>
<br></br>
<strong>Conclusion</strong>:
The research contributes to the discourse on the governance of the biotech and pharma industries, suggesting that ease of use can relate to stronger ethical regulators that can, in turn, enhance public health in these critical sectors.
        </p>
        </div>
        <div className="responsive-iframe-container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe7EGYHxssSrXEp5NHdg3zIz-eiSmYkJYwP4feLeuX920nrPw/viewform?embedded=true">Loading…</iframe>
        </div>
        <br></br>
        <h1 className="ml-4 mb-4 text-2xl font-bold">Market Regulator Types</h1>
        <div className="timeline-container">
          <div id="timeline" className="timeline flex">
            {osItems.map(item => (
              <TimelineItem key={item.id} id={item.id} title={item.title} content={item.content} imageUrl={item.imageUrl} />
            ))}
          </div>
        </div>
        <br></br>
        <div className="responsive-iframe-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/t8pgUkUcseo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="fig-box">  
            <p className="mb-4 ml-4">This video was a deliverable for the program; it was shown to peers, faculty, and industry.</p>
            </div>
        <h1 className="ml-4 mt-8 mb-4 text-2xl font-bold">Financial & Legislative Insights</h1>
        <div className="timeline-container">
          <div id="timeline" className="timeline flex">
            {finItems.map(item => (
              <TimelineItem key={item.id} id={item.id} title={item.title} content={item.content} imageUrl={item.imageUrl} />
            ))}
          </div>
        </div>
        <h1 className="ml-4 mt-8 mb-4 text-2xl font-bold">Case Study</h1>
        <div className="pr-4">
        <p className="mb-4 ml-4">
          Comparing <strong>Eli Lilly (USA)</strong> and <strong>Novo Nordisk (Denmark)</strong> highlights the impact of different ownership structures on pharmaceutical innovation and public health. Eli Lilly, a publicly traded corporation, focuses on maximizing profits and shareholder value, driving large-scale R&D and innovation. In contrast, Novo Nordisk, partially owned by a foundation, balances profit with public interest goals, ensuring a strong commitment to accessibility and long-term health outcomes—at least in the ideal world.
        </p>
        <div className="img-box">
        <img
            src="./lillynovo.svg"
            alt="schools"
          ></img>
        </div>
        <div className="fig-box">  
        <p><strong>Figure 1.</strong> A Comprehensive Comparison of Lilly and Novo [5].</p>
        </div>
        <h1 className="ml-4 mt-8 mb-4 text-xl font-bold">Recent Developments</h1>
        <p className="mb-4 ml-4">
          Recent events highlight the competitive landscape and strategic differences between these companies. On July 9, 2024, Novo Nordisk&apos;s shares dropped by 1.9% following a data analysis published in JAMA Internal Medicine. The analysis compared the weight-loss efficacy of Eli Lilly&apos;s drug Mounjaro, containing tirzepatide, with Novo Nordisk&apos;s Ozempic, containing semaglutide. The study found that patients taking Mounjaro were significantly more likely to experience substantial weight loss compared to those taking Ozempic. This finding underscores Eli Lilly&apos;s strong position in the burgeoning weight-loss drug market, which could be worth $150 billion annually by the early 2030s. Despite this, Novo Nordisk emphasized the need for head-to-head clinical trials to make definitive comparisons, highlighting their commitment to rigorous scientific validation.
        </p>
        <div className="img-box">
        <img
            src="./importanceofstudies.svg"
            alt="importanceofstudies"
          ></img>
        </div>
        <div className="fig-box">  
        <p><strong>Figure 2.</strong> The Stock Market Ripple of Obesity and Diabetes Drugs [5].</p>
        </div>
        <h1 className="ml-4 mt-8 mb-4 text-xl font-bold">Legal and Structural Influences</h1>
        <p className="mb-4 ml-4">
        The legal frameworks governing each company have also played a crucial role in shaping their strategies and market behaviors. In the United States, Eli Lilly operates under laws that prioritize shareholder interests, driving a focus on profitability and return on investment. This legal environment encourages aggressive R&D spending and competitive pricing strategies aimed at maximizing revenue. For instance, Eli Lilly&apos;s significant investment in developing innovative drugs like Mounjaro reflects the company&apos;s strategy to capture high-revenue markets despite higher drug prices, which can limit accessibility for lower-income populations.
        <br></br>
        <br></br>
        In contrast, Denmark&apos;s legal environment for Novo Nordisk, influenced by its partial foundation ownership, encourages a more balanced approach. Danish laws and the foundation&apos;s charter mandate a focus on both profitability and public welfare. This structure ensures that Novo Nordisk not only invests in innovative treatments but also prioritizes accessibility and long-term public health goals. The foundation ownership model supports comprehensive public health initiatives and sustainable practices, aligning the company&apos;s operations with broader societal benefits.
        </p>
        </div>
        <h1 className="ml-4 mt-8 mb-4 text-2xl font-bold">References</h1>
        <div className="reference-box">    
        <p className="text-lg ml-4 mb-4">
[1] Banal-Estañol, A., Newham, M., & Seldeslachts, J. (2021). Common Ownership in the U.S. Pharmaceutical Industry: A Network Analysis. The Antitrust Bulletin, 66(1), 68–99. https://doi.org/10.1177/0003603x20985796
    <br></br>
[2] Boadi, Kwame. “Erosion of Funding for the National Institutes of Health Threatens U.S. Leadership in Biomedical Research” CAP (2014).
<br></br>
[3] Lazonick, William, and Öner Tulum. “US biopharmaceutical finance and the sustainability of the biotech business model.” Research Policy 40.9 (2011): 1170-1187.
<br></br>
[4] Vallas, Steven, Kleinman, Daniel and Biscotti, Dina. “Political Structures and the making of US Biotechnology” in State of Innovation: The U.S. Government&apos;s Role in Technology Development (2011). Paradigm Publishers.
<br></br>
[5] Yahoo Finance. (2024). Yahoo Finance - Business Finance, Stock Market, Quotes, News. Yahoo Finance. https://finance.yahoo.com/
<br></br>
<br></br>
<i>Special thanks to Dr. Sowers, Professor Waitzkin, and the rest of the Duke Applied Ethics+ team for their help along the way!</i>
        </p>
      </div>
      </main>
    </div>
  );
};

export default Main;
