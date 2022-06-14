import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisitsCreateInput } from "../../../inputs/VisitsCreateInput";
import { VisitsUpdateInput } from "../../../inputs/VisitsUpdateInput";
import { VisitsWhereUniqueInput } from "../../../inputs/VisitsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertVisitsArgs {
  @TypeGraphQL.Field(_type => VisitsWhereUniqueInput, {
    nullable: false
  })
  where!: VisitsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisitsCreateInput, {
    nullable: false
  })
  create!: VisitsCreateInput;

  @TypeGraphQL.Field(_type => VisitsUpdateInput, {
    nullable: false
  })
  update!: VisitsUpdateInput;
}
