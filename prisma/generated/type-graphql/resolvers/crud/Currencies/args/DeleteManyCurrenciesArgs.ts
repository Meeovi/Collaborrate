import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrenciesWhereInput } from "../../../inputs/CurrenciesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCurrenciesArgs {
  @TypeGraphQL.Field(_type => CurrenciesWhereInput, {
    nullable: true
  })
  where?: CurrenciesWhereInput | undefined;
}
