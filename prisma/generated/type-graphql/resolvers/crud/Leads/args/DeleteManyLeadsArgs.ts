import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeadsWhereInput } from "../../../inputs/LeadsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLeadsArgs {
  @TypeGraphQL.Field(_type => LeadsWhereInput, {
    nullable: true
  })
  where?: LeadsWhereInput | undefined;
}
