import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesCreateManyInput } from "../../../inputs/CategoriesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCategoriesArgs {
  @TypeGraphQL.Field(_type => [CategoriesCreateManyInput], {
    nullable: false
  })
  data!: CategoriesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
