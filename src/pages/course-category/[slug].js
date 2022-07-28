import Layout from '../../components/Layout';
import Heading from '../../components/elements/Heading';
import DesignItem from '../../components/atoms/DesignItem';
import {
  getMdxFromDir,
  getPathsFromDir,
  getSingleMdx,
} from '../../utils/helpers';

export default function Home() {
  return (
    <Layout>
      <Heading />
      <DesignItem />
    </Layout>
  );
}


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
   ${filesDir}/${slug}.mdx,
  );
  return {
    props: {
      post: { content, slug, ...frontmatter },
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}