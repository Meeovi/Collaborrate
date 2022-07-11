import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgreementsOrderByWithAggregationInput } from "../../../inputs/AgreementsOrderByWithAggregationInput";
import { AgreementsScalarWhereWithAggregatesInput } from "../../../inputs/AgreementsScalarWhereWithAggregatesInput";
import { AgreementsWhereInput } from "../../../inputs/AgreementsWhereInput";
import { AgreementsScalarFieldEnum } from "../../../../enums/AgreementsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAgreementsArgs {
  @TypeGraphQL.Field(_type => AgreementsWhereInput, {
    nullable: true
  })
  where?: AgreementsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AgreementsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AgreementsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AgreementsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "reference_id" | "created" | "updated" | "content" | "name" | "image" | "excerpt" | "type" | "user_id" | "shop_id">;

  @TypeGraphQL.Field(_type => AgreementsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AgreementsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
