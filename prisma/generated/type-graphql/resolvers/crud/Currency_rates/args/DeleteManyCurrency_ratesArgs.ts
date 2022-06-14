import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_ratesWhereInput } from "../../../inputs/Currency_ratesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCurrency_ratesArgs {
  @TypeGraphQL.Field(_type => Currency_ratesWhereInput, {
    nullable: true
  })
  where?: Currency_ratesWhereInput | undefined;
}
