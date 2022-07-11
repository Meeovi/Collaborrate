import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ManufacturerCreateManyInput } from "../../../inputs/ManufacturerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyManufacturerArgs {
  @TypeGraphQL.Field(_type => [ManufacturerCreateManyInput], {
    nullable: false
  })
  data!: ManufacturerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
