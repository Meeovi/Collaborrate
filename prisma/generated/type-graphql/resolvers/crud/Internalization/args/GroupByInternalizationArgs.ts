import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InternalizationOrderByWithAggregationInput } from "../../../inputs/InternalizationOrderByWithAggregationInput";
import { InternalizationScalarWhereWithAggregatesInput } from "../../../inputs/InternalizationScalarWhereWithAggregatesInput";
import { InternalizationWhereInput } from "../../../inputs/InternalizationWhereInput";
import { InternalizationScalarFieldEnum } from "../../../../enums/InternalizationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByInternalizationArgs {
  @TypeGraphQL.Field(_type => InternalizationWhereInput, {
    nullable: true
  })
  where?: InternalizationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InternalizationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: InternalizationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [InternalizationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "region" | "description" | "default" | "website">;

  @TypeGraphQL.Field(_type => InternalizationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: InternalizationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
