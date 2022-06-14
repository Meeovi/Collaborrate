import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cart_price_rulesCreateManyInput } from "../../../inputs/Cart_price_rulesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCart_price_rulesArgs {
  @TypeGraphQL.Field(_type => [Cart_price_rulesCreateManyInput], {
    nullable: false
  })
  data!: Cart_price_rulesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
