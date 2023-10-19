'use client';

import { Container, Flex, Heading, Text, Card, Badge } from '@radix-ui/themes'
import IssueCard from '../components/IssueCard'

const issues = [
  {
    key: 1,
    title: "Authentication Error",
    description: "Users are unable to log in to the app due to an authentication error.",
    tags: ["Devops", "UI", "a11y"],
  },
  {
    key: 2,
    title: "Broken Link",
    description: "The link to the user profile page is broken and leads to a 404 error.",
    tags: ["UI", "a11y"],
  },
  {
    key: 3,
    title: "Missing Data",
    description: "The user profile page is missing the user's name and profile picture.",
    tags: ["UI"],
  },
  {
    key: 4,
    title: "Broken Image",
    description: "The user profile picture is broken and leads to a 404 error.",
    tags: ["UI", "a11y"],
  },
  {
    key: 5,
    title: "Incorrect Styling",
    description: "The user profile page is missing the correct styling.",
    tags: ["UI"],
  },
  {
    key: 6,
    title: "Incorrect Data",
    description: "The user profile page is missing the user's name and profile picture.",
    tags: ["UI"],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container size='1'>
        <Flex direction='column' pb='4'>
          <Heading>Coding Issue Tracker</Heading>
          <Text color='gray'>Here you can find the issues relevant to your certain project.</Text>
        </Flex>
        <Flex direction='column' gap='4'>
          {issues.map((issue) => (
            <IssueCard key={issue.key} title={issue.title} description={issue.description} tags={issue.tags} />
          ))}
        </Flex>
      </Container>
    </main>
  )
}

