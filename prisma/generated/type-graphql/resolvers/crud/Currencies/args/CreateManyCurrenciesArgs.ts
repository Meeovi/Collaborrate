import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrenciesCreateManyInput } from "../../../inputs/CurrenciesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCurrenciesArgs {
  @TypeGraphQL.Field(_type => [CurrenciesCreateManyInput], {
    nullable: false
  })
  data!: CurrenciesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
