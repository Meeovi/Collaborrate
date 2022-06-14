import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesUpdateManyMutationInput } from "../../../inputs/CategoriesUpdateManyMutationInput";
import { CategoriesWhereInput } from "../../../inputs/CategoriesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCategoriesArgs {
  @TypeGraphQL.Field(_type => CategoriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: CategoriesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CategoriesWhereInput, {
    nullable: true
  })
  where?: CategoriesWhereInput | undefined;
}
