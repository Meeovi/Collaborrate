import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeadsUpdateManyMutationInput } from "../../../inputs/LeadsUpdateManyMutationInput";
import { LeadsWhereInput } from "../../../inputs/LeadsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLeadsArgs {
  @TypeGraphQL.Field(_type => LeadsUpdateManyMutationInput, {
    nullable: false
  })
  data!: LeadsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LeadsWhereInput, {
    nullable: true
  })
  where?: LeadsWhereInput | undefined;
}
