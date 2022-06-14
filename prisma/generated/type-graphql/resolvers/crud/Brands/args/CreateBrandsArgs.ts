import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BrandsCreateInput } from "../../../inputs/BrandsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBrandsArgs {
  @TypeGraphQL.Field(_type => BrandsCreateInput, {
    nullable: false
  })
  data!: BrandsCreateInput;
}
