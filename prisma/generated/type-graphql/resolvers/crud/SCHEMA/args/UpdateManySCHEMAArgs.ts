import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SCHEMAUpdateManyMutationInput } from "../../../inputs/SCHEMAUpdateManyMutationInput";
import { SCHEMAWhereInput } from "../../../inputs/SCHEMAWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySCHEMAArgs {
  @TypeGraphQL.Field(_type => SCHEMAUpdateManyMutationInput, {
    nullable: false
  })
  data!: SCHEMAUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SCHEMAWhereInput, {
    nullable: true
  })
  where?: SCHEMAWhereInput | undefined;
}
