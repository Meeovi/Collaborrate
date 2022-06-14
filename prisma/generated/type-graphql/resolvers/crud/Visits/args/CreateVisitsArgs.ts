import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisitsCreateInput } from "../../../inputs/VisitsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateVisitsArgs {
  @TypeGraphQL.Field(_type => VisitsCreateInput, {
    nullable: false
  })
  data!: VisitsCreateInput;
}
