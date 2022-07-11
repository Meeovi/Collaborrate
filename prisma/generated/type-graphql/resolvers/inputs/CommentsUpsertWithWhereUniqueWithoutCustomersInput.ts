import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutCustomersInput } from "../inputs/CommentsCreateWithoutCustomersInput";
import { CommentsUpdateWithoutCustomersInput } from "../inputs/CommentsUpdateWithoutCustomersInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpsertWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class CommentsUpsertWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsUpdateWithoutCustomersInput, {
    nullable: false
  })
  update!: CommentsUpdateWithoutCustomersInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutCustomersInput;
}
