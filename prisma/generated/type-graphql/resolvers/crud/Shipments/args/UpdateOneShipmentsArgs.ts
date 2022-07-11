import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShipmentsUpdateInput } from "../../../inputs/ShipmentsUpdateInput";
import { ShipmentsWhereUniqueInput } from "../../../inputs/ShipmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneShipmentsArgs {
  @TypeGraphQL.Field(_type => ShipmentsUpdateInput, {
    nullable: false
  })
  data!: ShipmentsUpdateInput;

  @TypeGraphQL.Field(_type => ShipmentsWhereUniqueInput, {
    nullable: false
  })
  where!: ShipmentsWhereUniqueInput;
}
