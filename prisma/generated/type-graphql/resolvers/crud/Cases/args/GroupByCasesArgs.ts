import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasesOrderByWithAggregationInput } from "../../../inputs/CasesOrderByWithAggregationInput";
import { CasesScalarWhereWithAggregatesInput } from "../../../inputs/CasesScalarWhereWithAggregatesInput";
import { CasesWhereInput } from "../../../inputs/CasesWhereInput";
import { CasesScalarFieldEnum } from "../../../../enums/CasesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCasesArgs {
  @TypeGraphQL.Field(_type => CasesWhereInput, {
    nullable: true
  })
  where?: CasesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CasesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CasesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "case_number" | "state" | "type" | "subject" | "description" | "resolution" | "priority" | "status" | "account_name" | "assigned_to" | "date_modified">;

  @TypeGraphQL.Field(_type => CasesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CasesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
