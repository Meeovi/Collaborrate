import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuotesCreateManyInput } from "../../../inputs/QuotesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyQuotesArgs {
  @TypeGraphQL.Field(_type => [QuotesCreateManyInput], {
    nullable: false
  })
  data!: QuotesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
