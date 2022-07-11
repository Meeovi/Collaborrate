import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticsUpdateManyMutationInput } from "../../../inputs/AnalyticsUpdateManyMutationInput";
import { AnalyticsWhereInput } from "../../../inputs/AnalyticsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAnalyticsArgs {
  @TypeGraphQL.Field(_type => AnalyticsUpdateManyMutationInput, {
    nullable: false
  })
  data!: AnalyticsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AnalyticsWhereInput, {
    nullable: true
  })
  where?: AnalyticsWhereInput | undefined;
}
