import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesWhereInput } from "../inputs/QuotesWhereInput";

@TypeGraphQL.InputType("QuotesListRelationFilter", {
  isAbstract: true
})
export class QuotesListRelationFilter {
  @TypeGraphQL.Field(_type => QuotesWhereInput, {
    nullable: true
  })
  every?: QuotesWhereInput | undefined;

  @TypeGraphQL.Field(_type => QuotesWhereInput, {
    nullable: true
  })
  some?: QuotesWhereInput | undefined;

  @TypeGraphQL.Field(_type => QuotesWhereInput, {
    nullable: true
  })
  none?: QuotesWhereInput | undefined;
}
