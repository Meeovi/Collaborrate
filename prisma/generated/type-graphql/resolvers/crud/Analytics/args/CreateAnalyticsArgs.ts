import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticsCreateInput } from "../../../inputs/AnalyticsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAnalyticsArgs {
  @TypeGraphQL.Field(_type => AnalyticsCreateInput, {
    nullable: false
  })
  data!: AnalyticsCreateInput;
}
