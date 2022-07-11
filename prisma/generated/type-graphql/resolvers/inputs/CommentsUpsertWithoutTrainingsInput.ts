import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutTrainingsInput } from "../inputs/CommentsCreateWithoutTrainingsInput";
import { CommentsUpdateWithoutTrainingsInput } from "../inputs/CommentsUpdateWithoutTrainingsInput";

@TypeGraphQL.InputType("CommentsUpsertWithoutTrainingsInput", {
  isAbstract: true
})
export class CommentsUpsertWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => CommentsUpdateWithoutTrainingsInput, {
    nullable: false
  })
  update!: CommentsUpdateWithoutTrainingsInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutTrainingsInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutTrainingsInput;
}
