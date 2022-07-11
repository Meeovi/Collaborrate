import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Product_attribute_setScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Product_attribute_setScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Product_attribute_setScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Product_attribute_setScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attribute_setScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Product_attribute_setScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attribute_setScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Product_attribute_setScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  based_on?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  attribute_id?: IntWithAggregatesFilter | undefined;
}
