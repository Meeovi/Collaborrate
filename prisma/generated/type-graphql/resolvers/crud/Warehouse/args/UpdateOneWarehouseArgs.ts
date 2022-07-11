import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WarehouseUpdateInput } from "../../../inputs/WarehouseUpdateInput";
import { WarehouseWhereUniqueInput } from "../../../inputs/WarehouseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWarehouseArgs {
  @TypeGraphQL.Field(_type => WarehouseUpdateInput, {
    nullable: false
  })
  data!: WarehouseUpdateInput;

  @TypeGraphQL.Field(_type => WarehouseWhereUniqueInput, {
    nullable: false
  })
  where!: WarehouseWhereUniqueInput;
}
