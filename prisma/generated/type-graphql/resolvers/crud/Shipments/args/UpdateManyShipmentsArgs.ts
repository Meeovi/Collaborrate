import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShipmentsUpdateManyMutationInput } from "../../../inputs/ShipmentsUpdateManyMutationInput";
import { ShipmentsWhereInput } from "../../../inputs/ShipmentsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShipmentsArgs {
  @TypeGraphQL.Field(_type => ShipmentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShipmentsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ShipmentsWhereInput, {
    nullable: true
  })
  where?: ShipmentsWhereInput | undefined;
}
