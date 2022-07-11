import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContractsWhereInput } from "../../../inputs/ContractsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyContractsArgs {
  @TypeGraphQL.Field(_type => ContractsWhereInput, {
    nullable: true
  })
  where?: ContractsWhereInput | undefined;
}
