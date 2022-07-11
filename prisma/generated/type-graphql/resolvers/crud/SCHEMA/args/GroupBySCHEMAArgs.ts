import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SCHEMAOrderByWithAggregationInput } from "../../../inputs/SCHEMAOrderByWithAggregationInput";
import { SCHEMAScalarWhereWithAggregatesInput } from "../../../inputs/SCHEMAScalarWhereWithAggregatesInput";
import { SCHEMAWhereInput } from "../../../inputs/SCHEMAWhereInput";
import { SCHEMAScalarFieldEnum } from "../../../../enums/SCHEMAScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySCHEMAArgs {
  @TypeGraphQL.Field(_type => SCHEMAWhereInput, {
    nullable: true
  })
  where?: SCHEMAWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SCHEMAOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SCHEMAOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SCHEMAScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"className" | "schema" | "isParseClass">;

  @TypeGraphQL.Field(_type => SCHEMAScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SCHEMAScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
