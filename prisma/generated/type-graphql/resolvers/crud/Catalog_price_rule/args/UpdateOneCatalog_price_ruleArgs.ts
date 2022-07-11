import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Catalog_price_ruleUpdateInput } from "../../../inputs/Catalog_price_ruleUpdateInput";
import { Catalog_price_ruleWhereUniqueInput } from "../../../inputs/Catalog_price_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCatalog_price_ruleArgs {
  @TypeGraphQL.Field(_type => Catalog_price_ruleUpdateInput, {
    nullable: false
  })
  data!: Catalog_price_ruleUpdateInput;

  @TypeGraphQL.Field(_type => Catalog_price_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Catalog_price_ruleWhereUniqueInput;
}
