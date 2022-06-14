import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuotesCreateInput } from "../../../inputs/QuotesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateQuotesArgs {
  @TypeGraphQL.Field(_type => QuotesCreateInput, {
    nullable: false
  })
  data!: QuotesCreateInput;
}
