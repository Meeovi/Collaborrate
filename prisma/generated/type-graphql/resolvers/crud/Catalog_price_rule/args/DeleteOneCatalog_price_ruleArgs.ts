import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Catalog_price_ruleWhereUniqueInput } from "../../../inputs/Catalog_price_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCatalog_price_ruleArgs {
  @TypeGraphQL.Field(_type => Catalog_price_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Catalog_price_ruleWhereUniqueInput;
}
