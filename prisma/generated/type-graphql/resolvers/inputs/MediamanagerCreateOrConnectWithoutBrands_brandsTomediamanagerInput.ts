import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateWithoutBrands_brandsTomediamanagerInput } from "../inputs/MediamanagerCreateWithoutBrands_brandsTomediamanagerInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerCreateOrConnectWithoutBrands_brandsTomediamanagerInput", {
  isAbstract: true
})
export class MediamanagerCreateOrConnectWithoutBrands_brandsTomediamanagerInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerCreateWithoutBrands_brandsTomediamanagerInput, {
    nullable: false
  })
  create!: MediamanagerCreateWithoutBrands_brandsTomediamanagerInput;
}
