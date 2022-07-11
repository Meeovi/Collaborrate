import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisitsCreateInput } from "../../../inputs/VisitsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVisitsArgs {
  @TypeGraphQL.Field(_type => VisitsCreateInput, {
    nullable: false
  })
  data!: VisitsCreateInput;
}
