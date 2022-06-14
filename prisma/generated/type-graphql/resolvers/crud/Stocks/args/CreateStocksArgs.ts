import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StocksCreateInput } from "../../../inputs/StocksCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStocksArgs {
  @TypeGraphQL.Field(_type => StocksCreateInput, {
    nullable: false
  })
  data!: StocksCreateInput;
}
