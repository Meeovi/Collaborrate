import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateWithoutProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerCreateWithoutProducts_mediamanagerToproductsInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerCreateOrConnectWithoutProducts_mediamanagerToproductsInput", {
  isAbstract: true
})
export class MediamanagerCreateOrConnectWithoutProducts_mediamanagerToproductsInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerCreateWithoutProducts_mediamanagerToproductsInput, {
    nullable: false
  })
  create!: MediamanagerCreateWithoutProducts_mediamanagerToproductsInput;
}
