import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsWhereInput } from "../inputs/CommentsWhereInput";

@TypeGraphQL.InputType("CommentsRelationFilter", {
  isAbstract: true
})
export class CommentsRelationFilter {
  @TypeGraphQL.Field(_type => CommentsWhereInput, {
    nullable: true
  })
  is?: CommentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentsWhereInput, {
    nullable: true
  })
  isNot?: CommentsWhereInput | undefined;
}
