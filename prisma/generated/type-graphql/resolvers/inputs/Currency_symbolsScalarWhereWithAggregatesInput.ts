import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Currency_symbolsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Currency_symbolsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Currency_symbolsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Currency_symbolsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_symbolsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Currency_symbolsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_symbolsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Currency_symbolsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  symbol?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter, {
    nullable: true
  })
  use_standard?: BoolNullableWithAggregatesFilter | undefined;
}
