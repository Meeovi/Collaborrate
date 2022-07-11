import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContractsUpdateInput } from "../../../inputs/ContractsUpdateInput";
import { ContractsWhereUniqueInput } from "../../../inputs/ContractsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneContractsArgs {
  @TypeGraphQL.Field(_type => ContractsUpdateInput, {
    nullable: false
  })
  data!: ContractsUpdateInput;

  @TypeGraphQL.Field(_type => ContractsWhereUniqueInput, {
    nullable: false
  })
  where!: ContractsWhereUniqueInput;
}
