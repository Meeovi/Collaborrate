import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EndofshiftOrderByWithAggregationInput } from "../../../inputs/EndofshiftOrderByWithAggregationInput";
import { EndofshiftScalarWhereWithAggregatesInput } from "../../../inputs/EndofshiftScalarWhereWithAggregatesInput";
import { EndofshiftWhereInput } from "../../../inputs/EndofshiftWhereInput";
import { EndofshiftScalarFieldEnum } from "../../../../enums/EndofshiftScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEndofshiftArgs {
  @TypeGraphQL.Field(_type => EndofshiftWhereInput, {
    nullable: true
  })
  where?: EndofshiftWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EndofshiftOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EndofshiftOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EndofshiftScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "content" | "login" | "mcms" | "next_shift" | "projects" | "tickets" | "whid">;

  @TypeGraphQL.Field(_type => EndofshiftScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EndofshiftScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
