import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyProducts_mediamanagerToproductsInputEnvelope } from "../inputs/MediamanagerCreateManyProducts_mediamanagerToproductsInputEnvelope";
import { MediamanagerCreateOrConnectWithoutProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerCreateOrConnectWithoutProducts_mediamanagerToproductsInput";
import { MediamanagerCreateWithoutProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerCreateWithoutProducts_mediamanagerToproductsInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerCreateNestedManyWithoutProducts_mediamanagerToproductsInput", {
  isAbstract: true
})
export class MediamanagerCreateNestedManyWithoutProducts_mediamanagerToproductsInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutProducts_mediamanagerToproductsInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutProducts_mediamanagerToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutProducts_mediamanagerToproductsInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutProducts_mediamanagerToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyProducts_mediamanagerToproductsInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyProducts_mediamanagerToproductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerWhereUniqueInput], {
    nullable: true
  })
  connect?: MediamanagerWhereUniqueInput[] | undefined;
}
