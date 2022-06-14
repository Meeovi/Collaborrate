import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlossaryOrderByWithAggregationInput } from "../../../inputs/GlossaryOrderByWithAggregationInput";
import { GlossaryScalarWhereWithAggregatesInput } from "../../../inputs/GlossaryScalarWhereWithAggregatesInput";
import { GlossaryWhereInput } from "../../../inputs/GlossaryWhereInput";
import { GlossaryScalarFieldEnum } from "../../../../enums/GlossaryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGlossaryArgs {
  @TypeGraphQL.Field(_type => GlossaryWhereInput, {
    nullable: true
  })
  where?: GlossaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GlossaryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GlossaryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GlossaryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "content" | "image" | "published">;

  @TypeGraphQL.Field(_type => GlossaryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GlossaryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
