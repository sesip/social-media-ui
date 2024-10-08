export const MainFeed = () => {
  const posts = [
    { id: 1, username: "sesi", message: "Hello world" },
    { id: 2, username: "giwa", message: "Hello Naija" },
    { id: 3, username: "dom", message: "Hello Canada" },
    { id: 4, username: "mustee", message: "Hello Poland" },
  ];

  return (
    <main className=" flex-1 p-4 ">
      {posts.map((post) => {
        return (
          <div key={post.id} className="bg-white p-4 rounded-md shadow-md mb-4">
            <div className="flex items-center justify-center">
              <div class="max-w-xl w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                {/* //<Image class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" /> */}
                <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {post.username}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  {post.message}
                </p>
                <a
                  href="#"
                  class="inline-flex font-medium items-center text-blue-600 hover:underline"
                >
                  Check out {post.username}'s profile
                  <svg
                    class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};
