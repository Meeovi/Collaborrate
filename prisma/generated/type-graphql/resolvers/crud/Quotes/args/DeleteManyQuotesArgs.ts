import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuotesWhereInput } from "../../../inputs/QuotesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyQuotesArgs {
  @TypeGraphQL.Field(_type => QuotesWhereInput, {
    nullable: true
  })
  where?: QuotesWhereInput | undefined;
}
