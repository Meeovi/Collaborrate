import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticsWhereInput } from "../../../inputs/AnalyticsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAnalyticsArgs {
  @TypeGraphQL.Field(_type => AnalyticsWhereInput, {
    nullable: true
  })
  where?: AnalyticsWhereInput | undefined;
}
