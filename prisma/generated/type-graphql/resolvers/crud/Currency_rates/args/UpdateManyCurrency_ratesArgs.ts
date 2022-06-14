import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_ratesUpdateManyMutationInput } from "../../../inputs/Currency_ratesUpdateManyMutationInput";
import { Currency_ratesWhereInput } from "../../../inputs/Currency_ratesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCurrency_ratesArgs {
  @TypeGraphQL.Field(_type => Currency_ratesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Currency_ratesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Currency_ratesWhereInput, {
    nullable: true
  })
  where?: Currency_ratesWhereInput | undefined;
}
