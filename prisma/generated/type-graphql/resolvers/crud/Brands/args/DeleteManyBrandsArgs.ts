import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BrandsWhereInput } from "../../../inputs/BrandsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBrandsArgs {
  @TypeGraphQL.Field(_type => BrandsWhereInput, {
    nullable: true
  })
  where?: BrandsWhereInput | undefined;
}
