import React from 'react';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import Article from '../../components/article/Article';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> Here is some recent news</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Dec 29, 2023" text="Inside the News Industry’s Uneasy Negotiations With OpenAI" artUrl={'https://www.nytimes.com/2023/12/29/business/media/media-openai-chatgpt.html'} />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Nov 22, 2023" text="OpenAI turmoil: Sam Altman back as CEO of ChatGPT creator" artUrl={'https://globalnews.ca/news/10107884/openai-sam-altman-returns/'} />
          <Article imgUrl={blog03} date="Jan 16, 2024" text="How ChatGPT maker OpenAI says it plans to prevent 2024 election misinformation" artUrl={'https://globalnews.ca/news/10230891/openai-chatgpt-election-misinformation-prevention/'}/>
          <Article imgUrl={blog04} date="Jan 24, 2024" text="OpenAI Quietly Scrapped a Promise to Disclose Key Documents to the Public" artUrl={'https://www.wired.com/story/openai-scrapped-promise-disclose-key-documents/'}/>
          <Article imgUrl={blog05} date="Feb 6, 2023" text="Which Sectors Are Working With OpenAI?" artUrl={'https://www.statista.com/chart/29244/number-of-companies-using-open-ai-in-their-business-processes-worldwide/'}/>
        </div>
      </div>
    </div>
  )
}

export default Blog