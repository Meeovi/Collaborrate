import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PartnersOrderByWithAggregationInput } from "../../../inputs/PartnersOrderByWithAggregationInput";
import { PartnersScalarWhereWithAggregatesInput } from "../../../inputs/PartnersScalarWhereWithAggregatesInput";
import { PartnersWhereInput } from "../../../inputs/PartnersWhereInput";
import { PartnersScalarFieldEnum } from "../../../../enums/PartnersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPartnersArgs {
  @TypeGraphQL.Field(_type => PartnersWhereInput, {
    nullable: true
  })
  where?: PartnersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PartnersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PartnersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "address" | "city" | "state" | "country" | "isPublic" | "business_type">;

  @TypeGraphQL.Field(_type => PartnersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PartnersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
