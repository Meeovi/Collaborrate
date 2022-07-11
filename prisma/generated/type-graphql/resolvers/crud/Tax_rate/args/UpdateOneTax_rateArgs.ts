import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rateUpdateInput } from "../../../inputs/Tax_rateUpdateInput";
import { Tax_rateWhereUniqueInput } from "../../../inputs/Tax_rateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTax_rateArgs {
  @TypeGraphQL.Field(_type => Tax_rateUpdateInput, {
    nullable: false
  })
  data!: Tax_rateUpdateInput;

  @TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_rateWhereUniqueInput;
}
