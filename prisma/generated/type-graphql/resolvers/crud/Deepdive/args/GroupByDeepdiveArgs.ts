import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeepdiveOrderByWithAggregationInput } from "../../../inputs/DeepdiveOrderByWithAggregationInput";
import { DeepdiveScalarWhereWithAggregatesInput } from "../../../inputs/DeepdiveScalarWhereWithAggregatesInput";
import { DeepdiveWhereInput } from "../../../inputs/DeepdiveWhereInput";
import { DeepdiveScalarFieldEnum } from "../../../../enums/DeepdiveScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDeepdiveArgs {
  @TypeGraphQL.Field(_type => DeepdiveWhereInput, {
    nullable: true
  })
  where?: DeepdiveWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeepdiveOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DeepdiveOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeepdiveScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "end_date" | "content" | "attendees" | "login" | "start_date" | "whid">;

  @TypeGraphQL.Field(_type => DeepdiveScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DeepdiveScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
