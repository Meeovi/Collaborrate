import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateWithoutUsersInput } from "../inputs/MediamanagerCreateWithoutUsersInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class MediamanagerCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerCreateWithoutUsersInput, {
    nullable: false
  })
  create!: MediamanagerCreateWithoutUsersInput;
}
