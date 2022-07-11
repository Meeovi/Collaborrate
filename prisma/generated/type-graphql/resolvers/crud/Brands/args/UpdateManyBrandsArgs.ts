import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BrandsUpdateManyMutationInput } from "../../../inputs/BrandsUpdateManyMutationInput";
import { BrandsWhereInput } from "../../../inputs/BrandsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBrandsArgs {
  @TypeGraphQL.Field(_type => BrandsUpdateManyMutationInput, {
    nullable: false
  })
  data!: BrandsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BrandsWhereInput, {
    nullable: true
  })
  where?: BrandsWhereInput | undefined;
}
