import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeadsCreateInput } from "../../../inputs/LeadsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateLeadsArgs {
  @TypeGraphQL.Field(_type => LeadsCreateInput, {
    nullable: false
  })
  data!: LeadsCreateInput;
}
