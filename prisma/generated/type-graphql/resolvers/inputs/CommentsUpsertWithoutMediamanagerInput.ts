import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutMediamanagerInput } from "../inputs/CommentsCreateWithoutMediamanagerInput";
import { CommentsUpdateWithoutMediamanagerInput } from "../inputs/CommentsUpdateWithoutMediamanagerInput";

@TypeGraphQL.InputType("CommentsUpsertWithoutMediamanagerInput", {
  isAbstract: true
})
export class CommentsUpsertWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => CommentsUpdateWithoutMediamanagerInput, {
    nullable: false
  })
  update!: CommentsUpdateWithoutMediamanagerInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutMediamanagerInput;
}
