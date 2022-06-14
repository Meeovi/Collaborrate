import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductsRelationFilter } from "../inputs/ProductsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Tax_ruleWhereInput", {
  isAbstract: true
})
export class Tax_ruleWhereInput {
  @TypeGraphQL.Field(_type => [Tax_ruleWhereInput], {
    nullable: true
  })
  AND?: Tax_ruleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleWhereInput], {
    nullable: true
  })
  OR?: Tax_ruleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleWhereInput], {
    nullable: true
  })
  NOT?: Tax_ruleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tax_rate?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  prod_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => ProductsRelationFilter, {
    nullable: true
  })
  products?: ProductsRelationFilter | undefined;
}
