import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutMediamanagerInput } from "../inputs/CommentsCreateWithoutMediamanagerInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateOrConnectWithoutMediamanagerInput", {
  isAbstract: true
})
export class CommentsCreateOrConnectWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutMediamanagerInput;
}
