import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateWithoutTasksInput } from "../inputs/MediamanagerCreateWithoutTasksInput";
import { MediamanagerUpdateWithoutTasksInput } from "../inputs/MediamanagerUpdateWithoutTasksInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpsertWithWhereUniqueWithoutTasksInput", {
  isAbstract: true
})
export class MediamanagerUpsertWithWhereUniqueWithoutTasksInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateWithoutTasksInput, {
    nullable: false
  })
  update!: MediamanagerUpdateWithoutTasksInput;

  @TypeGraphQL.Field(_type => MediamanagerCreateWithoutTasksInput, {
    nullable: false
  })
  create!: MediamanagerCreateWithoutTasksInput;
}
