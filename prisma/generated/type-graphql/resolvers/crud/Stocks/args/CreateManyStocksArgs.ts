import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StocksCreateManyInput } from "../../../inputs/StocksCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStocksArgs {
  @TypeGraphQL.Field(_type => [StocksCreateManyInput], {
    nullable: false
  })
  data!: StocksCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
