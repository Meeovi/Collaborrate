import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisitsWhereUniqueInput } from "../../../inputs/VisitsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneVisitsArgs {
  @TypeGraphQL.Field(_type => VisitsWhereUniqueInput, {
    nullable: false
  })
  where!: VisitsWhereUniqueInput;
}
