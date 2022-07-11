import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_symbolsUpdateManyMutationInput } from "../../../inputs/Currency_symbolsUpdateManyMutationInput";
import { Currency_symbolsWhereInput } from "../../../inputs/Currency_symbolsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCurrency_symbolsArgs {
  @TypeGraphQL.Field(_type => Currency_symbolsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Currency_symbolsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Currency_symbolsWhereInput, {
    nullable: true
  })
  where?: Currency_symbolsWhereInput | undefined;
}
