import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Tax_categoryScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Tax_categoryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Tax_categoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Tax_categoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_categoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Tax_categoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_categoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Tax_categoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  default?: StringNullableWithAggregatesFilter | undefined;
}
