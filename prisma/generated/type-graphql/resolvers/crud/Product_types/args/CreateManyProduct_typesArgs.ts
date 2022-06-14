import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_typesCreateManyInput } from "../../../inputs/Product_typesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_typesArgs {
  @TypeGraphQL.Field(_type => [Product_typesCreateManyInput], {
    nullable: false
  })
  data!: Product_typesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
