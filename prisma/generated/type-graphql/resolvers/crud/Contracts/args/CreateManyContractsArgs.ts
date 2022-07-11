import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContractsCreateManyInput } from "../../../inputs/ContractsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyContractsArgs {
  @TypeGraphQL.Field(_type => [ContractsCreateManyInput], {
    nullable: false
  })
  data!: ContractsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
