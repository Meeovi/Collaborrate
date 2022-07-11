import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsWhereInput } from "../inputs/CommentsWhereInput";

@TypeGraphQL.InputType("CommentsListRelationFilter", {
  isAbstract: true
})
export class CommentsListRelationFilter {
  @TypeGraphQL.Field(_type => CommentsWhereInput, {
    nullable: true
  })
  every?: CommentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentsWhereInput, {
    nullable: true
  })
  some?: CommentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentsWhereInput, {
    nullable: true
  })
  none?: CommentsWhereInput | undefined;
}
