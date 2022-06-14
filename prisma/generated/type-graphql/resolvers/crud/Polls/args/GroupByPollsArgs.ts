import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollsOrderByWithAggregationInput } from "../../../inputs/PollsOrderByWithAggregationInput";
import { PollsScalarWhereWithAggregatesInput } from "../../../inputs/PollsScalarWhereWithAggregatesInput";
import { PollsWhereInput } from "../../../inputs/PollsWhereInput";
import { PollsScalarFieldEnum } from "../../../../enums/PollsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPollsArgs {
  @TypeGraphQL.Field(_type => PollsWhereInput, {
    nullable: true
  })
  where?: PollsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PollsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PollsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "excerpt" | "description" | "image" | "published" | "question" | "response" | "categories" | "articles" | "products" | "customers" | "users">;

  @TypeGraphQL.Field(_type => PollsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PollsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
