import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_categoryCreateManyInput } from "../../../inputs/Tax_categoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTax_categoryArgs {
  @TypeGraphQL.Field(_type => [Tax_categoryCreateManyInput], {
    nullable: false
  })
  data!: Tax_categoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
