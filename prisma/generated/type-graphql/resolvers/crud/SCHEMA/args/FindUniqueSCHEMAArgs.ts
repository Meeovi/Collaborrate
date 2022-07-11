import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SCHEMAWhereUniqueInput } from "../../../inputs/SCHEMAWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSCHEMAArgs {
  @TypeGraphQL.Field(_type => SCHEMAWhereUniqueInput, {
    nullable: false
  })
  where!: SCHEMAWhereUniqueInput;
}
