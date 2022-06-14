import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutCustomersInput } from "../inputs/CommentsCreateWithoutCustomersInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateOrConnectWithoutCustomersInput", {
  isAbstract: true
})
export class CommentsCreateOrConnectWithoutCustomersInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutCustomersInput;
}
