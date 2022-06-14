import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrdersWhereInput } from "../../../inputs/OrdersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrdersArgs {
  @TypeGraphQL.Field(_type => OrdersWhereInput, {
    nullable: true
  })
  where?: OrdersWhereInput | undefined;
}
