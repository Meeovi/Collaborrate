import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyBrands_brandsTomediamanagerInputEnvelope } from "../inputs/MediamanagerCreateManyBrands_brandsTomediamanagerInputEnvelope";
import { MediamanagerCreateOrConnectWithoutBrands_brandsTomediamanagerInput } from "../inputs/MediamanagerCreateOrConnectWithoutBrands_brandsTomediamanagerInput";
import { MediamanagerCreateWithoutBrands_brandsTomediamanagerInput } from "../inputs/MediamanagerCreateWithoutBrands_brandsTomediamanagerInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerCreateNestedManyWithoutBrands_brandsTomediamanagerInput", {
  isAbstract: true
})
export class MediamanagerCreateNestedManyWithoutBrands_brandsTomediamanagerInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutBrands_brandsTomediamanagerInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutBrands_brandsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutBrands_brandsTomediamanagerInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutBrands_brandsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyBrands_brandsTomediamanagerInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyBrands_brandsTomediamanagerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerWhereUniqueInput], {
    nullable: true
  })
  connect?: MediamanagerWhereUniqueInput[] | undefined;
}
