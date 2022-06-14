import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuotesCreateInput } from "../../../inputs/QuotesCreateInput";
import { QuotesUpdateInput } from "../../../inputs/QuotesUpdateInput";
import { QuotesWhereUniqueInput } from "../../../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertQuotesArgs {
  @TypeGraphQL.Field(_type => QuotesWhereUniqueInput, {
    nullable: false
  })
  where!: QuotesWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuotesCreateInput, {
    nullable: false
  })
  create!: QuotesCreateInput;

  @TypeGraphQL.Field(_type => QuotesUpdateInput, {
    nullable: false
  })
  update!: QuotesUpdateInput;
}
