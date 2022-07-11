import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContractsCreateInput } from "../../../inputs/ContractsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneContractsArgs {
  @TypeGraphQL.Field(_type => ContractsCreateInput, {
    nullable: false
  })
  data!: ContractsCreateInput;
}
