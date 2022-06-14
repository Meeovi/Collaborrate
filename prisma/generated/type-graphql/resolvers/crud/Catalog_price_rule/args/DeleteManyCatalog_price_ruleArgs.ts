import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Catalog_price_ruleWhereInput } from "../../../inputs/Catalog_price_ruleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCatalog_price_ruleArgs {
  @TypeGraphQL.Field(_type => Catalog_price_ruleWhereInput, {
    nullable: true
  })
  where?: Catalog_price_ruleWhereInput | undefined;
}
