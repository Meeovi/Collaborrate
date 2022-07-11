import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_ruleCreateManyInput } from "../../../inputs/Tax_ruleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTax_ruleArgs {
  @TypeGraphQL.Field(_type => [Tax_ruleCreateManyInput], {
    nullable: false
  })
  data!: Tax_ruleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
