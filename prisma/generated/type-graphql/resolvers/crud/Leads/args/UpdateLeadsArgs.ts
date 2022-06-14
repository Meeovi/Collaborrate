import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeadsUpdateInput } from "../../../inputs/LeadsUpdateInput";
import { LeadsWhereUniqueInput } from "../../../inputs/LeadsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLeadsArgs {
  @TypeGraphQL.Field(_type => LeadsUpdateInput, {
    nullable: false
  })
  data!: LeadsUpdateInput;

  @TypeGraphQL.Field(_type => LeadsWhereUniqueInput, {
    nullable: false
  })
  where!: LeadsWhereUniqueInput;
}
