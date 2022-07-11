import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrdersCreateManyInput } from "../../../inputs/OrdersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrdersArgs {
  @TypeGraphQL.Field(_type => [OrdersCreateManyInput], {
    nullable: false
  })
  data!: OrdersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
