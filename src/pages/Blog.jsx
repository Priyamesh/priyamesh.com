import { Link } from "react-router-dom";
import { formatDate } from "../utils/date";

async function BlogPost({ post }) {
  return (
    <article
      key={post._id}
      className="group relative flex flex-row justify-between space-y-2 border-gray-200 py-2"
    >
      <div>
        <h2 className="text-base font-bold text-gray-700">
          {post.metadata.title}
        </h2>
        {post.metadata.summary && (
          <p className="text-gray-500">{post.metadata.summary}</p>
        )}
      </div>
      <div>
        {post.metadata.publishedAt && (
          <>
            <p className="text-sm text-gray-500">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </>
        )}
        {/* <ViewCounter slug={post.slug} /> */}
        <Link
          href={`blog/${post.slug}`}
          className="absolute inset-0"
          prefetch={false}
        >
          <span className="sr-only">View Article</span>
        </Link>
      </div>
    </article>
  );
}

export default async function Blog() {
  let allPosts = [];
  let visiblePosts = allPosts.filter(
    (post) => post.metadata.visible == "true"
  );
  const posts = visiblePosts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl text-center">my blogs</h1>
          <p className="text-base text-gray-500">
            A collection of thoughts, ideas, and projects.
          </p>
        </div>
      </div>
      <hr className="my-4" />
      {posts?.length ? (
        <div className="grid gap-4">
          {posts.map((post, idx) => (
            <BlogPost post={post} key={idx} />
          ))}
        </div>
      ) : (
        <p className="text-center">no blogs yet.</p>
      )}
    </div>
  );
}