import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_ratesCreateManyInput } from "../../../inputs/Currency_ratesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCurrency_ratesArgs {
  @TypeGraphQL.Field(_type => [Currency_ratesCreateManyInput], {
    nullable: false
  })
  data!: Currency_ratesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
