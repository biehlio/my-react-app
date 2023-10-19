import { useState } from 'react';
import { Flex, Heading, Text, Card, Badge, Button } from '@radix-ui/themes'
import { ChatBubbleIcon } from '@radix-ui/react-icons'
import Comment from './comment'
import PropTypes from 'prop-types';

const badgeColors = ['red', 'blue', 'green', 'yellow']

const comments = [
    {
        author: 'John',
        content: 'This issue is really quite serios guys, we should fix it right away.',
        date: new Date('2022-01-01').toDateString(),
        reply: false
    },
    {
        author: 'Jane',
        content: 'John, kudos to you for being such a smart guy. I agree with you. 👍',
        date: new Date('2022-01-02').toDateString(),
        reply: true
    },
    {
        author: 'Bob',
        content: 'I like big dogs! 🐶🐕🐩',
        date: new Date('2022-01-03').toDateString(),
        reply: false
    }
];

export default function IssueCard({ title, description, tags }) {
    const [showComments, setshowComments] = useState(false);

    const handleToggle = () => {
        setshowComments(!showComments);
    }

    return (
        <Card>
            <Flex direction='column' gap='3'>
                <Flex justify='between'>
                    <Heading size='3'>{title}</Heading>
                    <Flex gap='2'>
                        {tags.map(tag => (
                            <Badge color={badgeColors[Math.floor(Math.random() * badgeColors.length)]} key={tag}>{tag}</Badge>
                        ))}
                    </Flex>
                </Flex>
                <Text mb='4'>
                    {description}
                </Text>
                <Flex align='center' justify='between'>
                    <Text size='1' color='gray'>Created 2 days ago</Text>
                    <Flex align='center' gap='3'>
                        <ChatBubbleIcon />
                        <Text size='1' color='gray'>
                            3 Comments
                        </Text>
                        <Button variant='ghost' size='2' onClick={handleToggle}>
                            {showComments ? 'Hide' : 'View'}
                        </Button>
                    </Flex>
                </Flex>
                <Flex direction='column' gap='5'>
                    {showComments && comments.map((comment) => (
                        <Comment key={comment.author} {...comment} />
                    ))}
                </Flex>
            </Flex>
        </Card>
    )
}

IssueCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
