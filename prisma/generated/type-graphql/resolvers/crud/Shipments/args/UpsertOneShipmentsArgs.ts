import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShipmentsCreateInput } from "../../../inputs/ShipmentsCreateInput";
import { ShipmentsUpdateInput } from "../../../inputs/ShipmentsUpdateInput";
import { ShipmentsWhereUniqueInput } from "../../../inputs/ShipmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneShipmentsArgs {
  @TypeGraphQL.Field(_type => ShipmentsWhereUniqueInput, {
    nullable: false
  })
  where!: ShipmentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShipmentsCreateInput, {
    nullable: false
  })
  create!: ShipmentsCreateInput;

  @TypeGraphQL.Field(_type => ShipmentsUpdateInput, {
    nullable: false
  })
  update!: ShipmentsUpdateInput;
}
