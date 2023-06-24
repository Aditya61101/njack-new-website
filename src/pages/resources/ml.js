import React from 'react';
import ResourcesComponent from './(layout)';
import 'react-notion-x/src/styles.css';
import { NotionAPI } from 'notion-client';

const pageId = '3ff8b67a1e0c4611bd334a4612202906';
export async function getServerSideProps() {
  // Fetch Notion page data from the Notion API
  const notion = new NotionAPI();
  const pageData = await notion.getPage(pageId);
  return {
    props: {
      pageData
    }
  };
}

const ml = ({ pageData }) => {
  return <ResourcesComponent pageData={pageData} />;
};

export default ml;
