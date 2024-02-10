import React from 'react'
import { Button, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { response } from '../../data/response'

const IssueCards = () => {
    const categories_issues = response[0].category_issues;
    console.log(categories_issues)
    const fav_lan = response[0].favorite_language;
    console.log(categories_issues)
    const bug = categories_issues.bug;
    const documentation = categories_issues.documentation;
    const duplicates = categories_issues.duplicate;
    const enhancement = categories_issues.enhancement;
    const important = categories_issues.important;
    const invalid = categories_issues.invalid;
    const que = categories_issues.question;
    const good_first_issue = categories_issues.good_first_issue;
    const help_wanted = categories_issues.help_wanted;
    const wontfix = categories_issues.wontfix;

    console.log(bug)
  return (
    <>
    <Heading m='1%'>Bug</Heading>
    <SimpleGrid columns={2} spacing={10}>
        {bug.map(issue => (
        <Card key={issue.id}> {/* Assuming each issue has a unique id */}
          <CardHeader>
            <Heading m='1%' size='md'>{issue.title}</Heading> {/* Assuming each issue has a title */}
          </CardHeader>
          {/* <CardBody>
          </CardBody> */}
          <CardFooter justifyContent={'space-between'}>
          <Text align={'center'}>Created at {issue.created_at}</Text> {/* Assuming each issue has a description */}
            <Button>View here</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
    <Heading m='1%'>Good First Issue</Heading>
    <SimpleGrid columns={2} spacing={10}>
        {good_first_issue.map(issue => (
        <Card key={issue.id}> {/* Assuming each issue has a unique id */}
          <CardHeader>
            <Heading m='1%' size='md'>{issue.title}</Heading> {/* Assuming each issue has a title */}
          </CardHeader>
          {/* <CardBody>
          </CardBody> */}
          <CardFooter justifyContent={'space-between'}>
          <Text align={'center'}>Created at {issue.created_at}</Text> {/* Assuming each issue has a description */}
            <Button>View here</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
    <Heading m='1%'>Documentation</Heading>
    <SimpleGrid columns={2} spacing={10}>
        {documentation.map(issue => (
        <Card key={issue.id}> {/* Assuming each issue has a unique id */}
          <CardHeader>
            <Heading m='1%' size='md'>{issue.title}</Heading> {/* Assuming each issue has a title */}
          </CardHeader>
          {/* <CardBody>
          </CardBody> */}
          <CardFooter justifyContent={'space-between'}>
          <Text align={'center'}>Created at {issue.created_at}</Text> {/* Assuming each issue has a description */}
            <Button>View here</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
    <Heading m='1%'>Duplicate</Heading>
    <SimpleGrid columns={2} spacing={10}>
        {duplicates.map(issue => (
        <Card key={issue.id}> {/* Assuming each issue has a unique id */}
          <CardHeader>
            <Heading m='1%' size='md'>{issue.title}</Heading> {/* Assuming each issue has a title */}
          </CardHeader>
          {/* <CardBody>
          </CardBody> */}
          <CardFooter justifyContent={'space-between'}>
          <Text align={'center'}>Created at {issue.created_at}</Text> {/* Assuming each issue has a description */}
            <Button>View here</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
    <Heading m='1%'>Enhancement</Heading>
    <SimpleGrid columns={2} spacing={10}>
        {enhancement.map(issue => (
        <Card key={issue.id}> {/* Assuming each issue has a unique id */}
          <CardHeader>
            <Heading m='1%' size='md'>{issue.title}</Heading> {/* Assuming each issue has a title */}
          </CardHeader>
          {/* <CardBody>
          </CardBody> */}
          <CardFooter justifyContent={'space-between'}>
          <Text align={'center'}>Created at {issue.created_at}</Text> {/* Assuming each issue has a description */}
            <Button>View here</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
    </>
  )
}

export default IssueCards