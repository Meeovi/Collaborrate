import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GlobalConfigWhereInput", {
  isAbstract: true
})
export class GlobalConfigWhereInput {
  @TypeGraphQL.Field(_type => [GlobalConfigWhereInput], {
    nullable: true
  })
  AND?: GlobalConfigWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GlobalConfigWhereInput], {
    nullable: true
  })
  OR?: GlobalConfigWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GlobalConfigWhereInput], {
    nullable: true
  })
  NOT?: GlobalConfigWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  objectId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableFilter, {
    nullable: true
  })
  params?: JsonNullableFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableFilter, {
    nullable: true
  })
  masterKeyOnly?: JsonNullableFilter | undefined;
}
