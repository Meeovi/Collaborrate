import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShipmentsCreateInput } from "../../../inputs/ShipmentsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateShipmentsArgs {
  @TypeGraphQL.Field(_type => ShipmentsCreateInput, {
    nullable: false
  })
  data!: ShipmentsCreateInput;
}
