import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulerCreateManyInput } from "../../../inputs/SchedulerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySchedulerArgs {
  @TypeGraphQL.Field(_type => [SchedulerCreateManyInput], {
    nullable: false
  })
  data!: SchedulerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
