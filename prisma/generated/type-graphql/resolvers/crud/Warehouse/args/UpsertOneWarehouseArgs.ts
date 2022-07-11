import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WarehouseCreateInput } from "../../../inputs/WarehouseCreateInput";
import { WarehouseUpdateInput } from "../../../inputs/WarehouseUpdateInput";
import { WarehouseWhereUniqueInput } from "../../../inputs/WarehouseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWarehouseArgs {
  @TypeGraphQL.Field(_type => WarehouseWhereUniqueInput, {
    nullable: false
  })
  where!: WarehouseWhereUniqueInput;

  @TypeGraphQL.Field(_type => WarehouseCreateInput, {
    nullable: false
  })
  create!: WarehouseCreateInput;

  @TypeGraphQL.Field(_type => WarehouseUpdateInput, {
    nullable: false
  })
  update!: WarehouseUpdateInput;
}
