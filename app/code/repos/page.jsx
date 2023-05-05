import reposStyles from './page.module.scss';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepos() {
  const response = await fetch('https://api.github.com/users/uziel78/repos', {
    next: {
      revalidate: 600,
    },
  });

  // give loader time to be displayed
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className={reposStyles.container}>
      <h2>My Repositories</h2>
      <ul className={reposStyles.list}>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className={reposStyles.details}>
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ReposPage;
