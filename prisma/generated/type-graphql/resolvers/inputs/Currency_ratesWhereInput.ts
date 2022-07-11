import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Currency_ratesWhereInput", {
  isAbstract: true
})
export class Currency_ratesWhereInput {
  @TypeGraphQL.Field(_type => [Currency_ratesWhereInput], {
    nullable: true
  })
  AND?: Currency_ratesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_ratesWhereInput], {
    nullable: true
  })
  OR?: Currency_ratesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_ratesWhereInput], {
    nullable: true
  })
  NOT?: Currency_ratesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  import_service?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  usd?: DecimalNullableFilter | undefined;
}
