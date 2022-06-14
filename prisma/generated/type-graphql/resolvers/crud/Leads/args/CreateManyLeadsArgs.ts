import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeadsCreateManyInput } from "../../../inputs/LeadsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLeadsArgs {
  @TypeGraphQL.Field(_type => [LeadsCreateManyInput], {
    nullable: false
  })
  data!: LeadsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
