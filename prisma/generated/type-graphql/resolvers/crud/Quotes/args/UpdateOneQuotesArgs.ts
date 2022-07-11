import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuotesUpdateInput } from "../../../inputs/QuotesUpdateInput";
import { QuotesWhereUniqueInput } from "../../../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneQuotesArgs {
  @TypeGraphQL.Field(_type => QuotesUpdateInput, {
    nullable: false
  })
  data!: QuotesUpdateInput;

  @TypeGraphQL.Field(_type => QuotesWhereUniqueInput, {
    nullable: false
  })
  where!: QuotesWhereUniqueInput;
}
