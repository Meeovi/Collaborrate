import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rateCreateManyInput } from "../../../inputs/Tax_rateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTax_rateArgs {
  @TypeGraphQL.Field(_type => [Tax_rateCreateManyInput], {
    nullable: false
  })
  data!: Tax_rateCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
