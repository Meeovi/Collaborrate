import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerUpdateWithoutProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerUpdateWithoutProducts_mediamanagerToproductsInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpdateWithWhereUniqueWithoutProducts_mediamanagerToproductsInput", {
  isAbstract: true
})
export class MediamanagerUpdateWithWhereUniqueWithoutProducts_mediamanagerToproductsInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateWithoutProducts_mediamanagerToproductsInput, {
    nullable: false
  })
  data!: MediamanagerUpdateWithoutProducts_mediamanagerToproductsInput;
}
