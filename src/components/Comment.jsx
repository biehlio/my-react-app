import { Avatar, Flex, Text, Box } from "@radix-ui/themes";
import { CornerBottomLeftIcon } from "@radix-ui/react-icons";
import PropTypes from 'prop-types';

export default function Comment({ author, content, date, reply }) {

    return (
        <Flex gap='2'>
            {reply && <Box ml='4'><CornerBottomLeftIcon /></Box>}
            <Avatar size={reply ? '1' : '3'} fallback={author[0]} />
            <Flex direction='column'>
                <Flex align='baseline' gap='2'>
                    <Text size='3' weight='medium'>{author}</Text>
                    <Text size='1' color="gray">{date}</Text>
                </Flex>
                <Text>
                    {content}
                </Text>
            </Flex>
        </Flex>
    )

}

Comment.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    reply: PropTypes.bool,
};
