import Renderer from "@/components/Renderer";
import { getData } from "@/lib/notion";

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

const pageId = '67baad74b5144269a51b1ecbd0c95b4b';

const About = async () => {
  const data = await getData(pageId);
  console.log(data);

  return <main>
    <Renderer recordMap={data} rootPageId={pageId} />
  </main>;
};

export default About;