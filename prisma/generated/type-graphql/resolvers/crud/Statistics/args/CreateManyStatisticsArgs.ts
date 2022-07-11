import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatisticsCreateManyInput } from "../../../inputs/StatisticsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStatisticsArgs {
  @TypeGraphQL.Field(_type => [StatisticsCreateManyInput], {
    nullable: false
  })
  data!: StatisticsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
