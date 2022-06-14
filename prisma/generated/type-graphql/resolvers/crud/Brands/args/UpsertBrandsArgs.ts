import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BrandsCreateInput } from "../../../inputs/BrandsCreateInput";
import { BrandsUpdateInput } from "../../../inputs/BrandsUpdateInput";
import { BrandsWhereUniqueInput } from "../../../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBrandsArgs {
  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: false
  })
  where!: BrandsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BrandsCreateInput, {
    nullable: false
  })
  create!: BrandsCreateInput;

  @TypeGraphQL.Field(_type => BrandsUpdateInput, {
    nullable: false
  })
  update!: BrandsUpdateInput;
}
