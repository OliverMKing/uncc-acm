/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProblemInput = {
  id?: string | null,
  name: string,
  link: string,
  tags: Array< Tag >,
  website: Website,
  difficulty: number,
};

export enum Tag {
  String = "String",
  Tree = "Tree",
  DynamicProgramming = "DynamicProgramming",
  Array = "Array",
  Recursion = "Recursion",
}


export enum Website {
  Leetcode = "Leetcode",
  Kattis = "Kattis",
  HackerRank = "HackerRank",
}


export type ModelProblemConditionInput = {
  name?: ModelStringInput | null,
  link?: ModelStringInput | null,
  tags?: ModelTagListInput | null,
  website?: ModelWebsiteInput | null,
  difficulty?: ModelIntInput | null,
  and?: Array< ModelProblemConditionInput | null > | null,
  or?: Array< ModelProblemConditionInput | null > | null,
  not?: ModelProblemConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelTagListInput = {
  eq?: Array< Tag | null > | null,
  ne?: Array< Tag | null > | null,
  contains?: Tag | null,
  notContains?: Tag | null,
};

export type ModelWebsiteInput = {
  eq?: Website | null,
  ne?: Website | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum Language {
  C = "C", // C#
  Java = "Java", // C++
  Python = "Python",
  JavaScript = "JavaScript",
  Go = "Go",
  Kotlin = "Kotlin",
  Ruby = "Ruby",
  Haskell = "Haskell",
  Rust = "Rust",
  Swift = "Swift",
  Scala = "Scala",
  PHP = "PHP",
}


export type UpdateProblemInput = {
  id: string,
  name?: string | null,
  link?: string | null,
  tags?: Array< Tag > | null,
  website?: Website | null,
  difficulty?: number | null,
};

export type DeleteProblemInput = {
  id?: string | null,
};

export type CreateSolutionInput = {
  id?: string | null,
  language: Language,
  code: string,
  owner: string,
  problemID: string,
};

export type ModelSolutionConditionInput = {
  language?: ModelLanguageInput | null,
  code?: ModelStringInput | null,
  problemID?: ModelIDInput | null,
  and?: Array< ModelSolutionConditionInput | null > | null,
  or?: Array< ModelSolutionConditionInput | null > | null,
  not?: ModelSolutionConditionInput | null,
};

export type ModelLanguageInput = {
  eq?: Language | null,
  ne?: Language | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateSolutionInput = {
  id: string,
  language?: Language | null,
  code?: string | null,
  owner?: string | null,
  problemID?: string | null,
};

export type DeleteSolutionInput = {
  id?: string | null,
};

export type ModelProblemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  link?: ModelStringInput | null,
  tags?: ModelTagListInput | null,
  website?: ModelWebsiteInput | null,
  difficulty?: ModelIntInput | null,
  and?: Array< ModelProblemFilterInput | null > | null,
  or?: Array< ModelProblemFilterInput | null > | null,
  not?: ModelProblemFilterInput | null,
};

export type ModelSolutionFilterInput = {
  id?: ModelIDInput | null,
  language?: ModelLanguageInput | null,
  code?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  problemID?: ModelIDInput | null,
  and?: Array< ModelSolutionFilterInput | null > | null,
  or?: Array< ModelSolutionFilterInput | null > | null,
  not?: ModelSolutionFilterInput | null,
};

export type CreateProblemMutationVariables = {
  input: CreateProblemInput,
  condition?: ModelProblemConditionInput | null,
};

export type CreateProblemMutation = {
  createProblem:  {
    __typename: "Problem",
    id: string,
    name: string,
    link: string,
    tags: Array< Tag >,
    website: Website,
    difficulty: number,
    createdAt: string,
    updatedAt: string,
    solutions:  {
      __typename: "ModelSolutionConnection",
      items:  Array< {
        __typename: "Solution",
        id: string,
        language: Language,
        code: string,
        owner: string,
        problemID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateProblemMutationVariables = {
  input: UpdateProblemInput,
  condition?: ModelProblemConditionInput | null,
};

export type UpdateProblemMutation = {
  updateProblem:  {
    __typename: "Problem",
    id: string,
    name: string,
    link: string,
    tags: Array< Tag >,
    website: Website,
    difficulty: number,
    createdAt: string,
    updatedAt: string,
    solutions:  {
      __typename: "ModelSolutionConnection",
      items:  Array< {
        __typename: "Solution",
        id: string,
        language: Language,
        code: string,
        owner: string,
        problemID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteProblemMutationVariables = {
  input: DeleteProblemInput,
  condition?: ModelProblemConditionInput | null,
};

export type DeleteProblemMutation = {
  deleteProblem:  {
    __typename: "Problem",
    id: string,
    name: string,
    link: string,
    tags: Array< Tag >,
    website: Website,
    difficulty: number,
    createdAt: string,
    updatedAt: string,
    solutions:  {
      __typename: "ModelSolutionConnection",
      items:  Array< {
        __typename: "Solution",
        id: string,
        language: Language,
        code: string,
        owner: string,
        problemID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateSolutionMutationVariables = {
  input: CreateSolutionInput,
  condition?: ModelSolutionConditionInput | null,
};

export type CreateSolutionMutation = {
  createSolution:  {
    __typename: "Solution",
    id: string,
    language: Language,
    code: string,
    owner: string,
    problemID: string,
    createdAt: string,
    updatedAt: string,
    problem:  {
      __typename: "Problem",
      id: string,
      name: string,
      link: string,
      tags: Array< Tag >,
      website: Website,
      difficulty: number,
      createdAt: string,
      updatedAt: string,
      solutions:  {
        __typename: "ModelSolutionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateSolutionMutationVariables = {
  input: UpdateSolutionInput,
  condition?: ModelSolutionConditionInput | null,
};

export type UpdateSolutionMutation = {
  updateSolution:  {
    __typename: "Solution",
    id: string,
    language: Language,
    code: string,
    owner: string,
    problemID: string,
    createdAt: string,
    updatedAt: string,
    problem:  {
      __typename: "Problem",
      id: string,
      name: string,
      link: string,
      tags: Array< Tag >,
      website: Website,
      difficulty: number,
      createdAt: string,
      updatedAt: string,
      solutions:  {
        __typename: "ModelSolutionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteSolutionMutationVariables = {
  input: DeleteSolutionInput,
  condition?: ModelSolutionConditionInput | null,
};

export type DeleteSolutionMutation = {
  deleteSolution:  {
    __typename: "Solution",
    id: string,
    language: Language,
    code: string,
    owner: string,
    problemID: string,
    createdAt: string,
    updatedAt: string,
    problem:  {
      __typename: "Problem",
      id: string,
      name: string,
      link: string,
      tags: Array< Tag >,
      website: Website,
      difficulty: number,
      createdAt: string,
      updatedAt: string,
      solutions:  {
        __typename: "ModelSolutionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListProblemsQueryVariables = {
  filter?: ModelProblemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProblemsQuery = {
  listProblems:  {
    __typename: "ModelProblemConnection",
    items:  Array< {
      __typename: "Problem",
      id: string,
      name: string,
      link: string,
      tags: Array< Tag >,
      website: Website,
      difficulty: number,
      createdAt: string,
      updatedAt: string,
      solutions:  {
        __typename: "ModelSolutionConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetProblemQueryVariables = {
  id: string,
};

export type GetProblemQuery = {
  getProblem:  {
    __typename: "Problem",
    id: string,
    name: string,
    link: string,
    tags: Array< Tag >,
    website: Website,
    difficulty: number,
    createdAt: string,
    updatedAt: string,
    solutions:  {
      __typename: "ModelSolutionConnection",
      items:  Array< {
        __typename: "Solution",
        id: string,
        language: Language,
        code: string,
        owner: string,
        problemID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetSolutionQueryVariables = {
  id: string,
};

export type GetSolutionQuery = {
  getSolution:  {
    __typename: "Solution",
    id: string,
    language: Language,
    code: string,
    owner: string,
    problemID: string,
    createdAt: string,
    updatedAt: string,
    problem:  {
      __typename: "Problem",
      id: string,
      name: string,
      link: string,
      tags: Array< Tag >,
      website: Website,
      difficulty: number,
      createdAt: string,
      updatedAt: string,
      solutions:  {
        __typename: "ModelSolutionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListSolutionsQueryVariables = {
  filter?: ModelSolutionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSolutionsQuery = {
  listSolutions:  {
    __typename: "ModelSolutionConnection",
    items:  Array< {
      __typename: "Solution",
      id: string,
      language: Language,
      code: string,
      owner: string,
      problemID: string,
      createdAt: string,
      updatedAt: string,
      problem:  {
        __typename: "Problem",
        id: string,
        name: string,
        link: string,
        tags: Array< Tag >,
        website: Website,
        difficulty: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateProblemSubscription = {
  onCreateProblem:  {
    __typename: "Problem",
    id: string,
    name: string,
    link: string,
    tags: Array< Tag >,
    website: Website,
    difficulty: number,
    createdAt: string,
    updatedAt: string,
    solutions:  {
      __typename: "ModelSolutionConnection",
      items:  Array< {
        __typename: "Solution",
        id: string,
        language: Language,
        code: string,
        owner: string,
        problemID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateProblemSubscription = {
  onUpdateProblem:  {
    __typename: "Problem",
    id: string,
    name: string,
    link: string,
    tags: Array< Tag >,
    website: Website,
    difficulty: number,
    createdAt: string,
    updatedAt: string,
    solutions:  {
      __typename: "ModelSolutionConnection",
      items:  Array< {
        __typename: "Solution",
        id: string,
        language: Language,
        code: string,
        owner: string,
        problemID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteProblemSubscription = {
  onDeleteProblem:  {
    __typename: "Problem",
    id: string,
    name: string,
    link: string,
    tags: Array< Tag >,
    website: Website,
    difficulty: number,
    createdAt: string,
    updatedAt: string,
    solutions:  {
      __typename: "ModelSolutionConnection",
      items:  Array< {
        __typename: "Solution",
        id: string,
        language: Language,
        code: string,
        owner: string,
        problemID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateSolutionSubscription = {
  onCreateSolution:  {
    __typename: "Solution",
    id: string,
    language: Language,
    code: string,
    owner: string,
    problemID: string,
    createdAt: string,
    updatedAt: string,
    problem:  {
      __typename: "Problem",
      id: string,
      name: string,
      link: string,
      tags: Array< Tag >,
      website: Website,
      difficulty: number,
      createdAt: string,
      updatedAt: string,
      solutions:  {
        __typename: "ModelSolutionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateSolutionSubscriptionVariables = {
  owner: string,
};

export type OnUpdateSolutionSubscription = {
  onUpdateSolution:  {
    __typename: "Solution",
    id: string,
    language: Language,
    code: string,
    owner: string,
    problemID: string,
    createdAt: string,
    updatedAt: string,
    problem:  {
      __typename: "Problem",
      id: string,
      name: string,
      link: string,
      tags: Array< Tag >,
      website: Website,
      difficulty: number,
      createdAt: string,
      updatedAt: string,
      solutions:  {
        __typename: "ModelSolutionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteSolutionSubscriptionVariables = {
  owner: string,
};

export type OnDeleteSolutionSubscription = {
  onDeleteSolution:  {
    __typename: "Solution",
    id: string,
    language: Language,
    code: string,
    owner: string,
    problemID: string,
    createdAt: string,
    updatedAt: string,
    problem:  {
      __typename: "Problem",
      id: string,
      name: string,
      link: string,
      tags: Array< Tag >,
      website: Website,
      difficulty: number,
      createdAt: string,
      updatedAt: string,
      solutions:  {
        __typename: "ModelSolutionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
