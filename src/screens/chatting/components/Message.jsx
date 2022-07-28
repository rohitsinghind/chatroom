import React from 'react'
import {HStack, Avatar, VStack, Text } from '@chakra-ui/react'

export default function Message({text, uri, user='other'}) {
  console.log(uri)
  return (
    <>
    <HStack bg={"gray.100"} maxWidth={"75%"} p={2} borderRadius={"25px"} alignSelf={user==='me'?'flex-end':"flex-start"}>
        <Avatar src={uri}/>
        <VStack>
          <Text mr={2}>{text}</Text>
        </VStack>
    </HStack>
    </>
  )
}
