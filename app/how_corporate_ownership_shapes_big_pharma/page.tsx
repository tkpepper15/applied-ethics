'use client';

import React from 'react';
import Navbar from '../navbar'; // Ensure the path is correct
import Timeline, { TimelineItemProps } from '../timeline'; // Ensure the path is correct
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
    id: 2, 
    title: 'Charitable Spending', 
    content: `
    While foundations in the United States have managed to invest billions into pharma/biotech research, there are some inherent drawbacks to such involvement.
    Pitfalls of Direct Investment:
    • Nonprofits can't access the same investment channels as for-profits for R&D funding.
    • The FDA's user fees apply to all drug manufacturers, hindering nonprofit growth.
    • Current drug distribution networks favor high-priced drugs, disadvantaging nonprofits.
    • Medicare and Medicaid reimbursement policies conflict with nonprofits' mission to offer lower-cost drugs.
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
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <main className="pt-20 pb-12 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <h1 className="font-serif text-3xl sm:text-4xl mb-4 font-medium">How Market Regulators Shape the Biotech and Pharma Industries: A Survey on Ethics and Public Health</h1>
        <p className="text-sm mb-6 font-serif">Tejjas Kaul</p>
        <div className="mb-8">
          <img
            src="./schools.png"
            alt="schools"
            className="w-60 h-auto"
          />
        </div>
        
        <h2 className="font-serif text-2xl mb-4 font-medium">Abstract</h2>
        <div className="mb-8">         
          <p className="text-base mb-4">
            <strong>Background:</strong> This study explores various regulatory entities and the influence of their ethics on market dynamics within the biotechnology (biotech) and pharmaceutical (pharma) industries in the United States. In addition to assessing the role of traditional government bodies, the inadvertent hand of non-governmental organizations (NGOs), and corporate entities in impacting industry standards and public health outcomes is also investigated.
          </p>
          <p className="text-base mb-4">
            <strong>Objective:</strong> The research aims to understand public perception of the ideal regulatory entity in the biotech and pharma industries through a pre-post survey methodology.
          </p>
          <p className="text-base mb-4">
            <strong>Methods:</strong> Data were collected through a mixed-methods approach; a qualitative analysis of legal documents and quantitative data was concatenated. A case study comparing Eli Lilly (USA) and Novo Nordisk (Denmark) illustrates the impact of different ownership structures on regulatory practices. The results were visualized through an interactive dashboard, enhancing user experience and accessibility.
          </p>
          <p className="text-base mb-4">
            <strong>Results:</strong> By analyzing the survey design, the study highlights the views of the public on the ethical behavior of different regulators and their preference for those prioritizing public health over profit. The findings underscore the intricate relationship between public sentiment, ethical governance, and industry behavior.
          </p>
          <p className="text-base mb-4">
            <strong>Conclusion:</strong> The research contributes to the discourse on the governance of the biotech and pharma industries, suggesting that ease of use can relate to stronger ethical regulators that can, in turn, enhance public health in these critical sectors.
          </p>
        </div>
        
        <div className="responsive-iframe-container mb-12">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe7EGYHxssSrXEp5NHdg3zIz-eiSmYkJYwP4feLeuX920nrPw/viewform?embedded=true">Loading…</iframe>
        </div>
        
        <h2 className="font-serif text-2xl mb-6 font-medium">Market Regulator Types</h2>
        <div className="carousel-section -mx-4 sm:-mx-6 md:-mx-8">
          <Timeline items={osItems} />
        </div>
        
        <div className="my-12 -mx-4 sm:-mx-6 md:-mx-8">
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
          <div className="text-center py-4 px-4 sm:px-6 md:px-8">  
            <p className="text-sm text-charcoal-100 italic">This video was a deliverable for the program; it was shown to peers, faculty, and industry.</p>
          </div>
        </div>
        
        <h2 className="font-serif text-2xl mb-6 font-medium">Financial & Legislative Insights</h2>
        <div className="carousel-section -mx-4 sm:-mx-6 md:-mx-8">
          <Timeline items={finItems} />
        </div>
        
        <h2 className="font-serif text-2xl mt-12 mb-6 font-medium">Case Study</h2>
        <div className="mb-8">
          <p className="mb-6">
            Comparing <strong>Eli Lilly (USA)</strong> and <strong>Novo Nordisk (Denmark)</strong> highlights the impact of different ownership structures on pharmaceutical innovation and public health. Eli Lilly, a publicly traded corporation, focuses on maximizing profits and shareholder value, driving large-scale R&D and innovation. In contrast, Novo Nordisk, partially owned by a foundation, balances profit with public interest goals, ensuring a strong commitment to accessibility and long-term health outcomes—at least in the ideal world.
          </p>
          <div className="figure mb-8">
            <div className="figure-content">
              <img
                src="./lillynovo.svg"
                alt="Comparison between Eli Lilly and Novo Nordisk"
                className="w-full h-auto"
              />
            </div>
            <div className="figure-caption">
              <span className="figure-number">Figure 1.</span> A Comprehensive Comparison of Lilly and Novo [5].
            </div>
          </div>
          
          <h3 className="font-serif text-xl mb-4 font-medium">Recent Developments</h3>
          <p className="mb-6">
            On July 9, 2024, Novo Nordisk&apos;s shares dropped by 1.9% following a data analysis published in JAMA Internal Medicine. The analysis discerned sweeping claims regarding the weight-loss efficacy of Eli Lilly&apos;s drug Mounjaro, containing tirzepatide, with Novo Nordisk&apos;s Ozempic, containing semaglutide. Based on trial data, patients taking Mounjaro were significantly more likely to experience substantial weight loss compared to those taking Ozempic. Eli Lilly&apos;s strong position in the burgeoning weight-loss drug market, which could be worth $150 billion annually by the early 2030s is undoubtedly likely to continue growing. Despite this, Novo Nordisk emphasized the need for head-to-head clinical trials to make definitive comparisons, highlighting their commitment to rigorous scientific validation and the constant back-and-forth of competition.
          </p>
          <div className="figure mb-8">
            <div className="figure-content">
              <img
                src="./importanceofstudies.svg"
                alt="The importance of studies in pharmaceutical market"
                className="w-full h-auto"
              />
            </div>
            <div className="figure-caption">
              <span className="figure-number">Figure 2.</span> The Stock Market Ripple of Obesity and Diabetes Drugs [5].
            </div>
          </div>
          
          <h3 className="font-serif text-xl mb-4 font-medium">Legal and Structural Influences</h3>
          <p className="mb-6">
            Additionally, the legal frameworks governing each company have also shaped their market behaviors. In the United States, Eli Lilly operates under laws that prioritize shareholder interests, and in turn, there is an apparent focus on profitability and return on investment. This legal environment encourages aggressive R&D spending and competitive pricing strategies aimed at maximizing revenue. Eli Lilly&apos;s significant investment in developing innovative drugs like Mounjaro instead of heavily funding rare disease research reflects the company&apos;s strategy to capture high-revenue markets despite higher drug prices—meanwhile, accessibility for lower-income populations is limited.
          </p>
          <p className="mb-6">
            In contrast, Denmark&apos;s legal environment for Novo Nordisk is influenced by its partial foundation ownership; thus, a more balanced economic approach is feasible. Danish laws and the foundation&apos;s charter mandate a focus on both profitability and public welfare. This structure ensures that Novo Nordisk not only invests in innovative treatments but also prioritizes accessibility and long-term public health goals. The foundation ownership model supports comprehensive public health initiatives which aligns the company&apos;s operations with broader societal benefits.
          </p>
        </div>
        
        <h2 className="font-serif text-2xl mb-4 font-medium">References</h2>
        <div className="references-section">    
          <p className="reference-entry">
            <span className="reference-number">[1]</span> Banal-Estañol, A., Newham, M., & Seldeslachts, J. (2021). Common Ownership in the U.S. Pharmaceutical Industry: A Network Analysis. <em>The Antitrust Bulletin</em>, 66(1), 68–99. https://doi.org/10.1177/0003603x20985796
          </p>
          <p className="reference-entry">
            <span className="reference-number">[2]</span> Boadi, K. &ldquo;Erosion of Funding for the National Institutes of Health Threatens U.S. Leadership in Biomedical Research&rdquo; <em>Center for American Progress</em> (2014).
          </p>
          <p className="reference-entry">
            <span className="reference-number">[3]</span> Lazonick, W., and Tulum, Ö. &ldquo;US biopharmaceutical finance and the sustainability of the biotech business model.&rdquo; <em>Research Policy</em> 40.9 (2011): 1170-1187.
          </p>
          <p className="reference-entry">
            <span className="reference-number">[4]</span> Vallas, S., Kleinman, D., and Biscotti, D. &ldquo;Political Structures and the making of US Biotechnology&rdquo; in <em>State of Innovation: The U.S. Government&apos;s Role in Technology Development</em> (2011). Paradigm Publishers.
          </p>
          <p className="reference-entry">
            <span className="reference-number">[5]</span> Yahoo Finance. (2024). <em>Yahoo Finance - Business Finance, Stock Market, Quotes, News</em>. https://finance.yahoo.com/
          </p>
          
          <p className="mt-6 text-center italic text-charcoal-100">
            Special thanks to Dr. Sowers, Professor Waitzkin, and the rest of the Duke Applied Ethics+ team for their help along the way!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Main;
