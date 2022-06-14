import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateWithoutCustomersInput } from "../inputs/MediamanagerCreateWithoutCustomersInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerCreateOrConnectWithoutCustomersInput", {
  isAbstract: true
})
export class MediamanagerCreateOrConnectWithoutCustomersInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: MediamanagerCreateWithoutCustomersInput;
}
