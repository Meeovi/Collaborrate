import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Catalog_price_ruleCreateInput } from "../../../inputs/Catalog_price_ruleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCatalog_price_ruleArgs {
  @TypeGraphQL.Field(_type => Catalog_price_ruleCreateInput, {
    nullable: false
  })
  data!: Catalog_price_ruleCreateInput;
}
