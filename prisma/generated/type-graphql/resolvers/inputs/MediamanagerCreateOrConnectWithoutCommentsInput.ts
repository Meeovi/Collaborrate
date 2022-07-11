import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateWithoutCommentsInput } from "../inputs/MediamanagerCreateWithoutCommentsInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class MediamanagerCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: MediamanagerCreateWithoutCommentsInput;
}
