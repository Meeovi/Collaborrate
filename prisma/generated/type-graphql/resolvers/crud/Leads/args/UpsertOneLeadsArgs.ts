import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeadsCreateInput } from "../../../inputs/LeadsCreateInput";
import { LeadsUpdateInput } from "../../../inputs/LeadsUpdateInput";
import { LeadsWhereUniqueInput } from "../../../inputs/LeadsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLeadsArgs {
  @TypeGraphQL.Field(_type => LeadsWhereUniqueInput, {
    nullable: false
  })
  where!: LeadsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LeadsCreateInput, {
    nullable: false
  })
  create!: LeadsCreateInput;

  @TypeGraphQL.Field(_type => LeadsUpdateInput, {
    nullable: false
  })
  update!: LeadsUpdateInput;
}
