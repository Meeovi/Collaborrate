import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ManufacturerWhereInput } from "../../../inputs/ManufacturerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyManufacturerArgs {
  @TypeGraphQL.Field(_type => ManufacturerWhereInput, {
    nullable: true
  })
  where?: ManufacturerWhereInput | undefined;
}
