import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
    <div>
      <h1>About Page</h1>
      <h3>What is it?</h3>
      <p>Retirement Checkup is a self-contained application 
        designed to provide you, the user, with a snapshot of how you are doing in planning for your retirement. 
        Retirement is a big, scary, far away goal for most people and the goal of this application is to make it a
        more approachable topic.</p>
      <h3>What does it do?</h3>
      <p>By taking rates of return for the stock market over the past 140 years, as well as average inflation rates, 
        Retirement Checkup allows a user to see a few things under the lens of passing time:
      </p>
      <ol> 
        <li>How much money will you need to live in X years?</li>
        <li>What are your current retirement accounts going to be worth if you add Y money to them over the years at retierement?</li>
        <li>If you collect Social Security, how much will that help?</li>
        <li>How much will other income streams help? (part time job, rental property, family trust, etc)</li>
      </ol>
      <h3>
        How do I get started?
      </h3>
      <p>
        Go ahead and click the Login/Register button up above and follow the questions to set up your account. You will need 
        the following to get started:
      </p>
        <ol>
          <li>An idea of how much you need to live per year.</li>
          <li>A current total in your retirement accounts (401k/Roth Ira/etc).  For this step please only consider money that is in an
            account that is invested in the stock market.  Multiple accounts should be aggregated into one sum.
          </li>
          <li>Rough idea of income streams you will have in retirement. For most people this will be just Social Security. 
            For others it may include pensions or rental income or annuities.
          </li>
        </ol>
      <h3>
        I don't have any retirement savings, and I don't even know where to get started?!?
      </h3>
      <p>While this app is focussed on people who have some amount of retirement savings, below are resources to get you started 
        on your journey.  
      </p>
        <ul>
        <li><a href="https://reddit.com/r/PersonalFinance">Personal Finance</a> - This is a community of people on Reddit.com 
        who are focussed on getting their finances in order.  The Readme documentation addresses almost all of the common "HELP" topics
        and will set someone focussed on starting to plan their financial future down the right path.</li>
        </ul>
      <h3>Ok, I've got all this stuff - how do I turn it up a notch?  I don't wanna work until I'm 65!</h3>
      <p>
        For those people who have been saving and are already on track to overshoot their retirement goals, here are some resources to 
        make that a reality sooner:
      </p>
      <ul>
        <li><a href="https://reddit.com/r/fire">FIRE </a> - Financial Independance Retire Early subreddit on Reddit.com. 
        This community is dedicated towards strategies to get people out of the day to day grind and enjoying life earlier.</li>
        <li><a href="https://reddit.com/r/phatfire">PhatFIRE</a> - PHAT Financial Independance Retire Early subreddit on Reddit.com. 
        This community is dedicated towards those people who have hit it big and want to move away from the corporate world
         in a bigger manner.</li>
      </ul>
    </div>
  </div>
);

export default AboutPage;
