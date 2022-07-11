import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StocksWhereInput } from "../../../inputs/StocksWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStocksArgs {
  @TypeGraphQL.Field(_type => StocksWhereInput, {
    nullable: true
  })
  where?: StocksWhereInput | undefined;
}
