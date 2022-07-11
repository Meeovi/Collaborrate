import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WarehouseWhereInput } from "../../../inputs/WarehouseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWarehouseArgs {
  @TypeGraphQL.Field(_type => WarehouseWhereInput, {
    nullable: true
  })
  where?: WarehouseWhereInput | undefined;
}
