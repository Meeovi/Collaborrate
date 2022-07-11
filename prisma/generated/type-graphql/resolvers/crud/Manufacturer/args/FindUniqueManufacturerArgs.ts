import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ManufacturerWhereUniqueInput } from "../../../inputs/ManufacturerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueManufacturerArgs {
  @TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput, {
    nullable: false
  })
  where!: ManufacturerWhereUniqueInput;
}
