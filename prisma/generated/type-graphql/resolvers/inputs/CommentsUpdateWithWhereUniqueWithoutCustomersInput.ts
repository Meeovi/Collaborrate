import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsUpdateWithoutCustomersInput } from "../inputs/CommentsUpdateWithoutCustomersInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpdateWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class CommentsUpdateWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsUpdateWithoutCustomersInput, {
    nullable: false
  })
  data!: CommentsUpdateWithoutCustomersInput;
}
