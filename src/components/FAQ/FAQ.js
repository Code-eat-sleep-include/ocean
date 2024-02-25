import React from 'react';

const FAQ = ({ showFAQ, toggleFAQ }) => {
  return (
    <div className={`faq-container show`}>
      <div className="faq-popup">
        {/* <button className="cancel-button" onClick={toggleFAQ}>
          X
        </button> */}
        <h2>Frequently Asked Questions</h2>
        <div className="faq-content">
          <p className='bold'>WHAT IS #OCEANGAURDIANS?</p>
          <p>#OceanGaurdians is a global campaign to raise $30M to remove 30M pounds of plastic and trash from our ocean, rivers and beaches. We’re here to rally the internet’s passion and imagination in support of the ocean.</p>
          <p className='bold'>WHAT IS THE TIMING OF THE CAMPAIGN?</p>
          <p>We launched #OceanGaurdians on Sunday, February 25th at 11PM PACIFIC TIME with a massive wave of online videos and we’ll continue to create content to rally our communities throughout the campaign. (If you’re reading this right now, and you love the ocean, we invite you to create something too). The funded cleanup work will begin in 2024 and is scheduled to conclude in three years. We’ll keep the site up and running the whole time.</p>
          <p className='bold'>WHAT HAPPENS TO THE MONEY?</p>
          <p>Every single dollar #OceanGaurdians raises toward the $30M will go to independently verified pounds of trash that have been removed from beaches, rivers or the ocean. When you donate, the funds go directly to the two not-for-profit organizations, Ocean Conservancy and The Ocean Cleanup. They split the funds 50/50 and the money will be released when the trash is removed and verified: $1, one pound. Each non-profit is responsible for delivering on their half of the goal.</p>
          <p className='bold'>WHAT HAPPENS TO THE TRASH?</p>
          <p>Great question! Wherever and whenever possible, items like cans, glass, and plastic beverage bottles will be separated and recycled. In cases where contamination of the trash and/or lack of local recycling makes it impossible to reprocess, trash will go to a proper disposal site in accordance with local regulations and capacity. That’s why we need to reduce the amount of plastic we use and waste we generate, period.</p>
          <p className='bold'>WHAT’S THE DEAL WITH PLASTIC POLLUTION IN OUR WATER?</p>
          <p>The ocean and the life within it are incredibly important. Aside from the water we drink, the ocean produces half the air we breathe every day. So it’s a no-brainer that keeping it clean and healthy is critical to our survival. Unfortunately our ocean—and the rivers that feed it—are full of plastic trash. It’s estimated that there are 200M tons of plastic already circulating in marine environments, with an estimated 11M tons entering the ocean EVERY YEAR. Pollution from items like bottles, bags, straws and abandoned fishing gear is a health crisis for our entire planet.</p>
          <p className='bold'>WHAT ABOUT CLIMATE CHANGE?</p>
          <p>Plastic production and climate change are inextricably linked, and both are huge problems for the ocean. Every year, 11 million metric tons of plastics enter our ocean. Nearly all of these plastics are made from fossil fuels including crude oil, natural gas liquids and coal. Ocean Conservancy has estimated that the crude oil needed to make that much plastic is over 800 times more than the amount spilled during the Exxon Valdez disaster! And the greenhouse gas emissions from the plastics sector are about 2 gigatons, equivalent to the emissions of 370 million passenger cars. You can learn more about the plastics-climate connection here. There’s much more we need to do to tackle the climate crisis, and we hope you bring this same #OceanGaurdians energy to other efforts to protect the ocean and the planet.</p>
          <p>The plastic pollution problem is so big that no single solution will fix it at once. But we’ve got to start somewhere. 30M pounds of trash collected is 30M pounds of trash that won’t come face to face with whales, dolphins, seabirds and other beloved wildlife, and that won’t keep breaking down into smaller and smaller pieces, ending up on our dinner plates. There are a lot of ways you can tackle the problem, and we think cleanups are complementary so long as they’re not excuses for delay. By reaching a billion people through #OceanGaurdians videos, and activating new generations of ocean advocates, we hope to inspire a movement and demand for solutions. Plastic and our oceans don’t mix, and we’re here to do something about it.</p>
          <p className='bold'>HOW CAN I HELP?</p>
          <p>We want you to do what you do best. Talk to a friend, organize your school or business, make some art, film a video, whatever makes sense to you and your community as we work toward 30M. For #OceanGaurdians, we saw artists draw comics for trees, kids hold bakesales, and tech founders one-up each other on the Leaderboard. Whoever your team is, get them on #OceanGaurdians. You can create a Team during checkout or join one from Search.
          We recommend you start by telling someone else about the mission, why you’re passionate about it, and invite them to get involved at #OceanGaurdians. We also encourage you to engage with and amplify #OceanGaurdians content across the internet. We think you’ll be surprised at who else is on #OceanGaurdians and how many fascinating videos are out there for you to discover. As the campaign develops, we hope you’ll co-create it with us as we rally toward our shared 30M goal. One of the most exciting parts for us is that we have no idea what you’ll come up with, and we can’t wait to see it.</p>
          <p className='bold'>HOW ARE WE ACTUALLY GOING TO CLEAN UP ALL THIS TRASH?</p>
          <p>We’re glad you asked. Because 30M pounds is A LOT of trash (roughly equivalent to 85 football fields covered a foot deep). We’re dividing our work among three points of intervention: beaches, rivers and oceans.
          Beaches
          With the experts at Ocean Conservancy, we’ll send professional crews to clean up some of the most iconic, vulnerable beaches on the planet.
          Rivers
          For our rivers, #OceanGaurdians will fund Interceptors™, The Ocean Cleanup’s river cleanup technologies that collect trash before it can reach the ocean. The Ocean Cleanup has several Interceptors already deployed in some of the world’s most polluted rivers to catch plastic and trash upstream. #OceanGaurdians will support the expansion and continued operation of this work as The Ocean Cleanup takes aim at the 1% of rivers which contribute 80% of the trash flowing into the ocean from rivers.
          Oceans
          Lost, abandoned and discarded fishing gear – or ghost gear – is some of the deadliest ocean trash, and is super tricky to recover. #OceanGaurdians will work with Ocean Conservancy’s Global Ghost Gear Initiative® to go to ghost gear “graveyards,” where we’ll identify and float the abandoned gear to the surface, hook it onto boat cranes and remove it from the ocean forever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
