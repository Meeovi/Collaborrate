import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WarehouseCreateManyInput } from "../../../inputs/WarehouseCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWarehouseArgs {
  @TypeGraphQL.Field(_type => [WarehouseCreateManyInput], {
    nullable: false
  })
  data!: WarehouseCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
