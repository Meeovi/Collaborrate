import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ManufacturerCreateInput } from "../../../inputs/ManufacturerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneManufacturerArgs {
  @TypeGraphQL.Field(_type => ManufacturerCreateInput, {
    nullable: false
  })
  data!: ManufacturerCreateInput;
}
