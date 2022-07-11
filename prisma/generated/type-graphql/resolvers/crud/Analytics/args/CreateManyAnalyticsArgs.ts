import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticsCreateManyInput } from "../../../inputs/AnalyticsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAnalyticsArgs {
  @TypeGraphQL.Field(_type => [AnalyticsCreateManyInput], {
    nullable: false
  })
  data!: AnalyticsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
