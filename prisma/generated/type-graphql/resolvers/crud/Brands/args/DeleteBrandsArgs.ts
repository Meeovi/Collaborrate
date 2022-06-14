import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BrandsWhereUniqueInput } from "../../../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBrandsArgs {
  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: false
  })
  where!: BrandsWhereUniqueInput;
}
