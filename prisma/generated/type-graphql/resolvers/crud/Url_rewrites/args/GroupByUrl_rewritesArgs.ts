import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Url_rewritesOrderByWithAggregationInput } from "../../../inputs/Url_rewritesOrderByWithAggregationInput";
import { Url_rewritesScalarWhereWithAggregatesInput } from "../../../inputs/Url_rewritesScalarWhereWithAggregatesInput";
import { Url_rewritesWhereInput } from "../../../inputs/Url_rewritesWhereInput";
import { Url_rewritesScalarFieldEnum } from "../../../../enums/Url_rewritesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUrl_rewritesArgs {
  @TypeGraphQL.Field(_type => Url_rewritesWhereInput, {
    nullable: true
  })
  where?: Url_rewritesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Url_rewritesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Url_rewritesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Url_rewritesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "request_path" | "description" | "redirect_type" | "target_path" | "store">;

  @TypeGraphQL.Field(_type => Url_rewritesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Url_rewritesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
