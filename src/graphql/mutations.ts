/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProblem = /* GraphQL */ `
  mutation CreateProblem(
    $input: CreateProblemInput!
    $condition: ModelProblemConditionInput
  ) {
    createProblem(input: $input, condition: $condition) {
      id
      name
      link
      tags
      website
      difficulty
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
      createdAt
      updatedAt
    }
  }
`;
export const updateProblem = /* GraphQL */ `
  mutation UpdateProblem(
    $input: UpdateProblemInput!
    $condition: ModelProblemConditionInput
  ) {
    updateProblem(input: $input, condition: $condition) {
      id
      name
      link
      tags
      website
      difficulty
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteProblem = /* GraphQL */ `
  mutation DeleteProblem(
    $input: DeleteProblemInput!
    $condition: ModelProblemConditionInput
  ) {
    deleteProblem(input: $input, condition: $condition) {
      id
      name
      link
      tags
      website
      difficulty
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
      createdAt
      updatedAt
    }
  }
`;
export const createSolution = /* GraphQL */ `
  mutation CreateSolution(
    $input: CreateSolutionInput!
    $condition: ModelSolutionConditionInput
  ) {
    createSolution(input: $input, condition: $condition) {
      id
      language
      code
      owner
      problemID
      problem {
        id
        name
        link
        tags
        website
        difficulty
        solutions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSolution = /* GraphQL */ `
  mutation UpdateSolution(
    $input: UpdateSolutionInput!
    $condition: ModelSolutionConditionInput
  ) {
    updateSolution(input: $input, condition: $condition) {
      id
      language
      code
      owner
      problemID
      problem {
        id
        name
        link
        tags
        website
        difficulty
        solutions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSolution = /* GraphQL */ `
  mutation DeleteSolution(
    $input: DeleteSolutionInput!
    $condition: ModelSolutionConditionInput
  ) {
    deleteSolution(input: $input, condition: $condition) {
      id
      language
      code
      owner
      problemID
      problem {
        id
        name
        link
        tags
        website
        difficulty
        solutions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
