import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrenciesUpdateManyMutationInput } from "../../../inputs/CurrenciesUpdateManyMutationInput";
import { CurrenciesWhereInput } from "../../../inputs/CurrenciesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCurrenciesArgs {
  @TypeGraphQL.Field(_type => CurrenciesUpdateManyMutationInput, {
    nullable: false
  })
  data!: CurrenciesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CurrenciesWhereInput, {
    nullable: true
  })
  where?: CurrenciesWhereInput | undefined;
}
