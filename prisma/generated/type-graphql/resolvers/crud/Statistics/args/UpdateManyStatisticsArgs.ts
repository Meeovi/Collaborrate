import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatisticsUpdateManyMutationInput } from "../../../inputs/StatisticsUpdateManyMutationInput";
import { StatisticsWhereInput } from "../../../inputs/StatisticsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStatisticsArgs {
  @TypeGraphQL.Field(_type => StatisticsUpdateManyMutationInput, {
    nullable: false
  })
  data!: StatisticsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StatisticsWhereInput, {
    nullable: true
  })
  where?: StatisticsWhereInput | undefined;
}
