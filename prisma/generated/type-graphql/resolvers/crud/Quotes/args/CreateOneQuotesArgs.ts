import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuotesCreateInput } from "../../../inputs/QuotesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneQuotesArgs {
  @TypeGraphQL.Field(_type => QuotesCreateInput, {
    nullable: false
  })
  data!: QuotesCreateInput;
}
