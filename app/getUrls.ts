export const getUrls = () => {
  const LinkedIn = process.env.NEXT_PUBLIC_LINKEDIN_URL as string;
  const github = process.env.NEXT_PUBLIC_GITHUB_URL as string;

  return {LinkedIn, github}
}