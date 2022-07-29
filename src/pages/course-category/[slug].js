import { filter } from 'lodash';
import Layout from '../../components/Layout';
import Heading from '../../components/elements/Heading';
import DesignItem from '../../components/atoms/DesignItem';
import {
  getMdxFromDir,
  getPathsFromDir,
  getSingleMdx,
} from '../../utils/helpers';

export default function Course({ allCourses }) {
  const courceData = allCourses.allData;

  const filteredCourses = filter(
    courceData,
    (item) => item.type === allCourses.slug,
  );

  return (
    <Layout>
      <Heading heading={allCourses.heading} />
      <DesignItem data={filteredCourses} />
    </Layout>
  );
}

const filesDir = 'content/courses';
export async function getStaticPaths() {
  // Retrieve all our slugs
  const paths = getPathsFromDir(filesDir);

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  if (!slug) return { notFound: true };

  const { data: frontmatter, content } = getSingleMdx(
    `${filesDir}/${slug}.mdx`,
  );

  const allData = getMdxFromDir('content/courses/courceData');

  return {
    props: {
      allCourses: { content, allData, slug, ...frontmatter },
    },
  };
}
