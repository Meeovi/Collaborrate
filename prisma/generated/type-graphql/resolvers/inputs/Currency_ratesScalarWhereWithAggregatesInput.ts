import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Currency_ratesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Currency_ratesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Currency_ratesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Currency_ratesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_ratesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Currency_ratesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_ratesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Currency_ratesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  import_service?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter, {
    nullable: true
  })
  usd?: DecimalNullableWithAggregatesFilter | undefined;
}
