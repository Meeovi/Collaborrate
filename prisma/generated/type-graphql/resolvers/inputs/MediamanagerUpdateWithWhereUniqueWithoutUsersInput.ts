import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerUpdateWithoutUsersInput } from "../inputs/MediamanagerUpdateWithoutUsersInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class MediamanagerUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: MediamanagerUpdateWithoutUsersInput;
}
