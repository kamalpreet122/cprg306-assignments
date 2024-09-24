import Link from "next/link";

const StudentInfo = () => {
  return (
    <div>
      <h1>Kamalpreet Kaur</h1>
      <p>
        Check out my GitHub repository :
        <Link href="https://github.com/your-github-username" target="_blank">
          GitHub Repository
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
