import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContractsUpdateManyMutationInput } from "../../../inputs/ContractsUpdateManyMutationInput";
import { ContractsWhereInput } from "../../../inputs/ContractsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyContractsArgs {
  @TypeGraphQL.Field(_type => ContractsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContractsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ContractsWhereInput, {
    nullable: true
  })
  where?: ContractsWhereInput | undefined;
}
