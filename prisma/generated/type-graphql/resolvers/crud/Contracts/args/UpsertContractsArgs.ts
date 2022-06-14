import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContractsCreateInput } from "../../../inputs/ContractsCreateInput";
import { ContractsUpdateInput } from "../../../inputs/ContractsUpdateInput";
import { ContractsWhereUniqueInput } from "../../../inputs/ContractsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertContractsArgs {
  @TypeGraphQL.Field(_type => ContractsWhereUniqueInput, {
    nullable: false
  })
  where!: ContractsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContractsCreateInput, {
    nullable: false
  })
  create!: ContractsCreateInput;

  @TypeGraphQL.Field(_type => ContractsUpdateInput, {
    nullable: false
  })
  update!: ContractsUpdateInput;
}
