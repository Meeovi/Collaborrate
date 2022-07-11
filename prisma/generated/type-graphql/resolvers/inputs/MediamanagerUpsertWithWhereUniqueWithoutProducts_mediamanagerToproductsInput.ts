import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateWithoutProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerCreateWithoutProducts_mediamanagerToproductsInput";
import { MediamanagerUpdateWithoutProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerUpdateWithoutProducts_mediamanagerToproductsInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpsertWithWhereUniqueWithoutProducts_mediamanagerToproductsInput", {
  isAbstract: true
})
export class MediamanagerUpsertWithWhereUniqueWithoutProducts_mediamanagerToproductsInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateWithoutProducts_mediamanagerToproductsInput, {
    nullable: false
  })
  update!: MediamanagerUpdateWithoutProducts_mediamanagerToproductsInput;

  @TypeGraphQL.Field(_type => MediamanagerCreateWithoutProducts_mediamanagerToproductsInput, {
    nullable: false
  })
  create!: MediamanagerCreateWithoutProducts_mediamanagerToproductsInput;
}
