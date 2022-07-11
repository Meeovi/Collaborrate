import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateWithoutCommentsInput } from "../inputs/MediamanagerCreateWithoutCommentsInput";
import { MediamanagerUpdateWithoutCommentsInput } from "../inputs/MediamanagerUpdateWithoutCommentsInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpsertWithWhereUniqueWithoutCommentsInput", {
  isAbstract: true
})
export class MediamanagerUpsertWithWhereUniqueWithoutCommentsInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: MediamanagerUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => MediamanagerCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: MediamanagerCreateWithoutCommentsInput;
}
