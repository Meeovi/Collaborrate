import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rateUpdateManyMutationInput } from "../../../inputs/Tax_rateUpdateManyMutationInput";
import { Tax_rateWhereInput } from "../../../inputs/Tax_rateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTax_rateArgs {
  @TypeGraphQL.Field(_type => Tax_rateUpdateManyMutationInput, {
    nullable: false
  })
  data!: Tax_rateUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Tax_rateWhereInput, {
    nullable: true
  })
  where?: Tax_rateWhereInput | undefined;
}
