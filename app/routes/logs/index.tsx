import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import * as firstPost from "./first-post.mdx";
import * as secondPost from "./second-post.mdx";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?/, ""),
    ...mod.attributes.meta,
  };
}

export const loader: LoaderFunction = () => {
  return [postFromModule(firstPost), postFromModule(secondPost)];
};

export default function LogsIndex() {
  const posts = useLoaderData();

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
            {post.description ? (
              <p className="m-0 lg:m-0">{post.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
