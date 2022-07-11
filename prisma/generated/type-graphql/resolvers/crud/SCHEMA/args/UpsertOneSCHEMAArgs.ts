import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SCHEMACreateInput } from "../../../inputs/SCHEMACreateInput";
import { SCHEMAUpdateInput } from "../../../inputs/SCHEMAUpdateInput";
import { SCHEMAWhereUniqueInput } from "../../../inputs/SCHEMAWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSCHEMAArgs {
  @TypeGraphQL.Field(_type => SCHEMAWhereUniqueInput, {
    nullable: false
  })
  where!: SCHEMAWhereUniqueInput;

  @TypeGraphQL.Field(_type => SCHEMACreateInput, {
    nullable: false
  })
  create!: SCHEMACreateInput;

  @TypeGraphQL.Field(_type => SCHEMAUpdateInput, {
    nullable: false
  })
  update!: SCHEMAUpdateInput;
}
