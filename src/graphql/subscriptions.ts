/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProblem = /* GraphQL */ `
  subscription OnCreateProblem {
    onCreateProblem {
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
export const onUpdateProblem = /* GraphQL */ `
  subscription OnUpdateProblem {
    onUpdateProblem {
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
export const onDeleteProblem = /* GraphQL */ `
  subscription OnDeleteProblem {
    onDeleteProblem {
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
export const onCreateSolution = /* GraphQL */ `
  subscription OnCreateSolution {
    onCreateSolution {
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
export const onUpdateSolution = /* GraphQL */ `
  subscription OnUpdateSolution($owner: String!) {
    onUpdateSolution(owner: $owner) {
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
export const onDeleteSolution = /* GraphQL */ `
  subscription OnDeleteSolution($owner: String!) {
    onDeleteSolution(owner: $owner) {
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
