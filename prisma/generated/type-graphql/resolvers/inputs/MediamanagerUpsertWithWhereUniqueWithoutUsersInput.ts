import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateWithoutUsersInput } from "../inputs/MediamanagerCreateWithoutUsersInput";
import { MediamanagerUpdateWithoutUsersInput } from "../inputs/MediamanagerUpdateWithoutUsersInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class MediamanagerUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: MediamanagerUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => MediamanagerCreateWithoutUsersInput, {
    nullable: false
  })
  create!: MediamanagerCreateWithoutUsersInput;
}
