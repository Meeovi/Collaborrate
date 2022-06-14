import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_symbolsWhereInput } from "../../../inputs/Currency_symbolsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCurrency_symbolsArgs {
  @TypeGraphQL.Field(_type => Currency_symbolsWhereInput, {
    nullable: true
  })
  where?: Currency_symbolsWhereInput | undefined;
}
