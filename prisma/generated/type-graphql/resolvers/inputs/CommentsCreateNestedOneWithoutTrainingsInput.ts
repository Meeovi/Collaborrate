import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateOrConnectWithoutTrainingsInput } from "../inputs/CommentsCreateOrConnectWithoutTrainingsInput";
import { CommentsCreateWithoutTrainingsInput } from "../inputs/CommentsCreateWithoutTrainingsInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateNestedOneWithoutTrainingsInput", {
  isAbstract: true
})
export class CommentsCreateNestedOneWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => CommentsCreateWithoutTrainingsInput, {
    nullable: true
  })
  create?: CommentsCreateWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateOrConnectWithoutTrainingsInput, {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentsWhereUniqueInput | undefined;
}
