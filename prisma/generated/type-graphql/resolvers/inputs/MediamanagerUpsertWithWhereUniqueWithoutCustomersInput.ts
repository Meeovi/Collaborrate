import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateWithoutCustomersInput } from "../inputs/MediamanagerCreateWithoutCustomersInput";
import { MediamanagerUpdateWithoutCustomersInput } from "../inputs/MediamanagerUpdateWithoutCustomersInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpsertWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class MediamanagerUpsertWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateWithoutCustomersInput, {
    nullable: false
  })
  update!: MediamanagerUpdateWithoutCustomersInput;

  @TypeGraphQL.Field(_type => MediamanagerCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: MediamanagerCreateWithoutCustomersInput;
}
