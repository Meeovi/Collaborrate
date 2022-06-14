import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Tax_categoryWhereInput", {
  isAbstract: true
})
export class Tax_categoryWhereInput {
  @TypeGraphQL.Field(_type => [Tax_categoryWhereInput], {
    nullable: true
  })
  AND?: Tax_categoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_categoryWhereInput], {
    nullable: true
  })
  OR?: Tax_categoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_categoryWhereInput], {
    nullable: true
  })
  NOT?: Tax_categoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  default?: StringNullableFilter | undefined;
}
