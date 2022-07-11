import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SCHEMAUpdateInput } from "../../../inputs/SCHEMAUpdateInput";
import { SCHEMAWhereUniqueInput } from "../../../inputs/SCHEMAWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSCHEMAArgs {
  @TypeGraphQL.Field(_type => SCHEMAUpdateInput, {
    nullable: false
  })
  data!: SCHEMAUpdateInput;

  @TypeGraphQL.Field(_type => SCHEMAWhereUniqueInput, {
    nullable: false
  })
  where!: SCHEMAWhereUniqueInput;
}
