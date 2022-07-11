import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerUpdateWithoutTasksInput } from "../inputs/MediamanagerUpdateWithoutTasksInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpdateWithWhereUniqueWithoutTasksInput", {
  isAbstract: true
})
export class MediamanagerUpdateWithWhereUniqueWithoutTasksInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateWithoutTasksInput, {
    nullable: false
  })
  data!: MediamanagerUpdateWithoutTasksInput;
}
