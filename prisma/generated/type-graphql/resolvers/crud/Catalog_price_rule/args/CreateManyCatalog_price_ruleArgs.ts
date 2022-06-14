import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Catalog_price_ruleCreateManyInput } from "../../../inputs/Catalog_price_ruleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCatalog_price_ruleArgs {
  @TypeGraphQL.Field(_type => [Catalog_price_ruleCreateManyInput], {
    nullable: false
  })
  data!: Catalog_price_ruleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
