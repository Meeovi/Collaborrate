import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BrandsWhereUniqueInput } from "../../../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBrandsArgs {
  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: false
  })
  where!: BrandsWhereUniqueInput;
}
