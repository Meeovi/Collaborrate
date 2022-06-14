import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_symbolsCreateManyInput } from "../../../inputs/Currency_symbolsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCurrency_symbolsArgs {
  @TypeGraphQL.Field(_type => [Currency_symbolsCreateManyInput], {
    nullable: false
  })
  data!: Currency_symbolsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
