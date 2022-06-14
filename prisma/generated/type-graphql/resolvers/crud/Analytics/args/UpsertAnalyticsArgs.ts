import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticsCreateInput } from "../../../inputs/AnalyticsCreateInput";
import { AnalyticsUpdateInput } from "../../../inputs/AnalyticsUpdateInput";
import { AnalyticsWhereUniqueInput } from "../../../inputs/AnalyticsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAnalyticsArgs {
  @TypeGraphQL.Field(_type => AnalyticsWhereUniqueInput, {
    nullable: false
  })
  where!: AnalyticsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnalyticsCreateInput, {
    nullable: false
  })
  create!: AnalyticsCreateInput;

  @TypeGraphQL.Field(_type => AnalyticsUpdateInput, {
    nullable: false
  })
  update!: AnalyticsUpdateInput;
}
