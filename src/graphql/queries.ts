/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listProblems = /* GraphQL */ `
  query ListProblems(
    $filter: ModelProblemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProblems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        link
        tags
        website
        difficulty
        createdAt
        updatedAt
        solutions {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getProblem = /* GraphQL */ `
  query GetProblem($id: ID!) {
    getProblem(id: $id) {
      id
      name
      link
      tags
      website
      difficulty
      createdAt
      updatedAt
      solutions {
        items {
          id
          language
          code
          owner
          problemID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const getSolution = /* GraphQL */ `
  query GetSolution($id: ID!) {
    getSolution(id: $id) {
      id
      language
      code
      owner
      problemID
      createdAt
      updatedAt
      problem {
        id
        name
        link
        tags
        website
        difficulty
        createdAt
        updatedAt
        solutions {
          nextToken
        }
      }
    }
  }
`;
export const listSolutions = /* GraphQL */ `
  query ListSolutions(
    $filter: ModelSolutionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSolutions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        language
        code
        owner
        problemID
        createdAt
        updatedAt
        problem {
          id
          name
          link
          tags
          website
          difficulty
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
