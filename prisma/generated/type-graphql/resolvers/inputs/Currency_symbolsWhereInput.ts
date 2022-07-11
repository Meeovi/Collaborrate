import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Currency_symbolsWhereInput", {
  isAbstract: true
})
export class Currency_symbolsWhereInput {
  @TypeGraphQL.Field(_type => [Currency_symbolsWhereInput], {
    nullable: true
  })
  AND?: Currency_symbolsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_symbolsWhereInput], {
    nullable: true
  })
  OR?: Currency_symbolsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_symbolsWhereInput], {
    nullable: true
  })
  NOT?: Currency_symbolsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  symbol?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  use_standard?: BoolNullableFilter | undefined;
}
