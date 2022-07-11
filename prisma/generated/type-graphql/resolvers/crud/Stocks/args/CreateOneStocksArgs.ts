import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StocksCreateInput } from "../../../inputs/StocksCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneStocksArgs {
  @TypeGraphQL.Field(_type => StocksCreateInput, {
    nullable: false
  })
  data!: StocksCreateInput;
}
