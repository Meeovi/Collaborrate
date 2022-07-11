import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StocksUpdateInput } from "../../../inputs/StocksUpdateInput";
import { StocksWhereUniqueInput } from "../../../inputs/StocksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneStocksArgs {
  @TypeGraphQL.Field(_type => StocksUpdateInput, {
    nullable: false
  })
  data!: StocksUpdateInput;

  @TypeGraphQL.Field(_type => StocksWhereUniqueInput, {
    nullable: false
  })
  where!: StocksWhereUniqueInput;
}
