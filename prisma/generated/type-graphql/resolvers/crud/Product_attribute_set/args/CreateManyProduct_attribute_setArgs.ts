import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attribute_setCreateManyInput } from "../../../inputs/Product_attribute_setCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_attribute_setArgs {
  @TypeGraphQL.Field(_type => [Product_attribute_setCreateManyInput], {
    nullable: false
  })
  data!: Product_attribute_setCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
