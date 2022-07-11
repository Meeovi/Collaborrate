import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ManufacturerUpdateManyMutationInput } from "../../../inputs/ManufacturerUpdateManyMutationInput";
import { ManufacturerWhereInput } from "../../../inputs/ManufacturerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyManufacturerArgs {
  @TypeGraphQL.Field(_type => ManufacturerUpdateManyMutationInput, {
    nullable: false
  })
  data!: ManufacturerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ManufacturerWhereInput, {
    nullable: true
  })
  where?: ManufacturerWhereInput | undefined;
}
