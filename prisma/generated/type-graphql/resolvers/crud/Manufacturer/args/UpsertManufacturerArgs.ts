import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ManufacturerCreateInput } from "../../../inputs/ManufacturerCreateInput";
import { ManufacturerUpdateInput } from "../../../inputs/ManufacturerUpdateInput";
import { ManufacturerWhereUniqueInput } from "../../../inputs/ManufacturerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertManufacturerArgs {
  @TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput, {
    nullable: false
  })
  where!: ManufacturerWhereUniqueInput;

  @TypeGraphQL.Field(_type => ManufacturerCreateInput, {
    nullable: false
  })
  create!: ManufacturerCreateInput;

  @TypeGraphQL.Field(_type => ManufacturerUpdateInput, {
    nullable: false
  })
  update!: ManufacturerUpdateInput;
}
