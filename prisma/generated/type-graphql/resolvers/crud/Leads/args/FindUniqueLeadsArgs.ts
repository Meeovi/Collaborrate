import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeadsWhereUniqueInput } from "../../../inputs/LeadsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLeadsArgs {
  @TypeGraphQL.Field(_type => LeadsWhereUniqueInput, {
    nullable: false
  })
  where!: LeadsWhereUniqueInput;
}
