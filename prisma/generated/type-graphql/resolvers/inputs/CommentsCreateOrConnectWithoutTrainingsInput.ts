import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutTrainingsInput } from "../inputs/CommentsCreateWithoutTrainingsInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateOrConnectWithoutTrainingsInput", {
  isAbstract: true
})
export class CommentsCreateOrConnectWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutTrainingsInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutTrainingsInput;
}
