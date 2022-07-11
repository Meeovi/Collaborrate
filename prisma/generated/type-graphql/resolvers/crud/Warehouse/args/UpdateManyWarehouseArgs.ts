import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WarehouseUpdateManyMutationInput } from "../../../inputs/WarehouseUpdateManyMutationInput";
import { WarehouseWhereInput } from "../../../inputs/WarehouseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWarehouseArgs {
  @TypeGraphQL.Field(_type => WarehouseUpdateManyMutationInput, {
    nullable: false
  })
  data!: WarehouseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WarehouseWhereInput, {
    nullable: true
  })
  where?: WarehouseWhereInput | undefined;
}
