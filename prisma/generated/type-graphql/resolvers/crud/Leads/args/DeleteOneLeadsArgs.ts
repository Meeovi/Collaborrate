import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeadsWhereUniqueInput } from "../../../inputs/LeadsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneLeadsArgs {
  @TypeGraphQL.Field(_type => LeadsWhereUniqueInput, {
    nullable: false
  })
  where!: LeadsWhereUniqueInput;
}
