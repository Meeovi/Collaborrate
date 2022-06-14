import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attributeCreateManyInput } from "../../../inputs/Product_attributeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_attributeArgs {
  @TypeGraphQL.Field(_type => [Product_attributeCreateManyInput], {
    nullable: false
  })
  data!: Product_attributeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
