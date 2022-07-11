import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StocksUpdateManyMutationInput } from "../../../inputs/StocksUpdateManyMutationInput";
import { StocksWhereInput } from "../../../inputs/StocksWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStocksArgs {
  @TypeGraphQL.Field(_type => StocksUpdateManyMutationInput, {
    nullable: false
  })
  data!: StocksUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StocksWhereInput, {
    nullable: true
  })
  where?: StocksWhereInput | undefined;
}
