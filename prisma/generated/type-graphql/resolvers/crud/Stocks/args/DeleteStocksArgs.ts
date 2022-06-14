import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StocksWhereUniqueInput } from "../../../inputs/StocksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteStocksArgs {
  @TypeGraphQL.Field(_type => StocksWhereUniqueInput, {
    nullable: false
  })
  where!: StocksWhereUniqueInput;
}
