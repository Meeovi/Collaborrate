import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Catalog_price_ruleOrderByWithRelationInput } from "../../../inputs/Catalog_price_ruleOrderByWithRelationInput";
import { Catalog_price_ruleWhereInput } from "../../../inputs/Catalog_price_ruleWhereInput";
import { Catalog_price_ruleWhereUniqueInput } from "../../../inputs/Catalog_price_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCatalog_price_ruleArgs {
  @TypeGraphQL.Field(_type => Catalog_price_ruleWhereInput, {
    nullable: true
  })
  where?: Catalog_price_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Catalog_price_ruleOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Catalog_price_ruleOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Catalog_price_ruleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Catalog_price_ruleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
