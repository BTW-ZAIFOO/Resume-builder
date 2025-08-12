import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | CV/Resume Builder",
  description: "This is Blog Page for CV/Resume Builder",
};

const Blog = () => {
  return (
    <>
      <section className="pt-40 pb-5">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="-mx-2 flex flex-wrap py-4" data-wow-delay=".15s">
            <div className="w-full px-2">
              <ul className="flex flex-wrap items-center justify-center gap-2 pt-8 sm:gap-3">
                <li>
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-8 min-w-[32px] items-center justify-center rounded-md px-3 text-xs transition hover:text-white sm:h-9 sm:min-w-[36px] sm:px-4 sm:text-sm"
                  >
                    Prev
                  </a>
                </li>
                <li>
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-8 min-w-[32px] items-center justify-center rounded-md px-3 text-xs transition hover:text-white sm:h-9 sm:min-w-[36px] sm:px-4 sm:text-sm"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-8 min-w-[32px] items-center justify-center rounded-md px-3 text-xs transition hover:text-white sm:h-9 sm:min-w-[36px] sm:px-4 sm:text-sm"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-8 min-w-[32px] items-center justify-center rounded-md px-3 text-xs transition hover:text-white sm:h-9 sm:min-w-[36px] sm:px-4 sm:text-sm"
                  >
                    3
                  </a>
                </li>
                <li>
                  <span className="bg-body-color/15 text-body-color flex h-8 min-w-[32px] items-center justify-center rounded-md px-3 text-xs sm:h-9 sm:min-w-[36px] sm:px-4 sm:text-sm">
                    ...
                  </span>
                </li>
                <li>
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-8 min-w-[32px] items-center justify-center rounded-md px-3 text-xs transition hover:text-white sm:h-9 sm:min-w-[36px] sm:px-4 sm:text-sm"
                  >
                    12
                  </a>
                </li>
                <li>
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-8 min-w-[32px] items-center justify-center rounded-md px-3 text-xs transition hover:text-white sm:h-9 sm:min-w-[36px] sm:px-4 sm:text-sm"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
