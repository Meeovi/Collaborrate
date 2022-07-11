import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("StocksWhereInput", {
  isAbstract: true
})
export class StocksWhereInput {
  @TypeGraphQL.Field(_type => [StocksWhereInput], {
    nullable: true
  })
  AND?: StocksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StocksWhereInput], {
    nullable: true
  })
  OR?: StocksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StocksWhereInput], {
    nullable: true
  })
  NOT?: StocksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  enabled?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  website?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  sources?: StringNullableFilter | undefined;
}
