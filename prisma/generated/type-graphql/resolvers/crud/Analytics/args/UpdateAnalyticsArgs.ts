import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticsUpdateInput } from "../../../inputs/AnalyticsUpdateInput";
import { AnalyticsWhereUniqueInput } from "../../../inputs/AnalyticsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAnalyticsArgs {
  @TypeGraphQL.Field(_type => AnalyticsUpdateInput, {
    nullable: false
  })
  data!: AnalyticsUpdateInput;

  @TypeGraphQL.Field(_type => AnalyticsWhereUniqueInput, {
    nullable: false
  })
  where!: AnalyticsWhereUniqueInput;
}
