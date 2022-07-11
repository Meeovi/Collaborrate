import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ManufacturerUpdateInput } from "../../../inputs/ManufacturerUpdateInput";
import { ManufacturerWhereUniqueInput } from "../../../inputs/ManufacturerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneManufacturerArgs {
  @TypeGraphQL.Field(_type => ManufacturerUpdateInput, {
    nullable: false
  })
  data!: ManufacturerUpdateInput;

  @TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput, {
    nullable: false
  })
  where!: ManufacturerWhereUniqueInput;
}
