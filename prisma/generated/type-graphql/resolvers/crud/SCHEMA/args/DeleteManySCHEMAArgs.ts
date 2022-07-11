import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SCHEMAWhereInput } from "../../../inputs/SCHEMAWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySCHEMAArgs {
  @TypeGraphQL.Field(_type => SCHEMAWhereInput, {
    nullable: true
  })
  where?: SCHEMAWhereInput | undefined;
}
