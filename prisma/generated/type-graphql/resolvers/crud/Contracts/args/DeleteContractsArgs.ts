import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContractsWhereUniqueInput } from "../../../inputs/ContractsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteContractsArgs {
  @TypeGraphQL.Field(_type => ContractsWhereUniqueInput, {
    nullable: false
  })
  where!: ContractsWhereUniqueInput;
}
