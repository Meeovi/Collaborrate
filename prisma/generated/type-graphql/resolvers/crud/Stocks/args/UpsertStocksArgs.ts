import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StocksCreateInput } from "../../../inputs/StocksCreateInput";
import { StocksUpdateInput } from "../../../inputs/StocksUpdateInput";
import { StocksWhereUniqueInput } from "../../../inputs/StocksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStocksArgs {
  @TypeGraphQL.Field(_type => StocksWhereUniqueInput, {
    nullable: false
  })
  where!: StocksWhereUniqueInput;

  @TypeGraphQL.Field(_type => StocksCreateInput, {
    nullable: false
  })
  create!: StocksCreateInput;

  @TypeGraphQL.Field(_type => StocksUpdateInput, {
    nullable: false
  })
  update!: StocksUpdateInput;
}
