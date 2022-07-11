import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImportmOrderByWithAggregationInput } from "../../../inputs/ImportmOrderByWithAggregationInput";
import { ImportmScalarWhereWithAggregatesInput } from "../../../inputs/ImportmScalarWhereWithAggregatesInput";
import { ImportmWhereInput } from "../../../inputs/ImportmWhereInput";
import { ImportmScalarFieldEnum } from "../../../../enums/ImportmScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByImportmArgs {
  @TypeGraphQL.Field(_type => ImportmWhereInput, {
    nullable: true
  })
  where?: ImportmWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ImportmOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ImportmOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImportmScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "description" | "file" | "url" | "image">;

  @TypeGraphQL.Field(_type => ImportmScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ImportmScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
