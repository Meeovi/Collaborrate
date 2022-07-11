import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesWhereInput } from "../../../inputs/CategoriesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCategoriesArgs {
  @TypeGraphQL.Field(_type => CategoriesWhereInput, {
    nullable: true
  })
  where?: CategoriesWhereInput | undefined;
}
