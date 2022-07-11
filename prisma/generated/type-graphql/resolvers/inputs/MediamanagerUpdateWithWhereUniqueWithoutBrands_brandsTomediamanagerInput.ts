import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerUpdateWithoutBrands_brandsTomediamanagerInput } from "../inputs/MediamanagerUpdateWithoutBrands_brandsTomediamanagerInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpdateWithWhereUniqueWithoutBrands_brandsTomediamanagerInput", {
  isAbstract: true
})
export class MediamanagerUpdateWithWhereUniqueWithoutBrands_brandsTomediamanagerInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateWithoutBrands_brandsTomediamanagerInput, {
    nullable: false
  })
  data!: MediamanagerUpdateWithoutBrands_brandsTomediamanagerInput;
}
