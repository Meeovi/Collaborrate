import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BrandsUpdateInput } from "../../../inputs/BrandsUpdateInput";
import { BrandsWhereUniqueInput } from "../../../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBrandsArgs {
  @TypeGraphQL.Field(_type => BrandsUpdateInput, {
    nullable: false
  })
  data!: BrandsUpdateInput;

  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: false
  })
  where!: BrandsWhereUniqueInput;
}
