import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWJuZHh0cW9sNmM2eXl1ZjNramh1M2U5M3ZiNHQyN3FqcGt6a3FwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YQJX1dSYxN53E4TxZc/giphy.gif",
      ),
    ],
  },
};

export default nextConfig;
