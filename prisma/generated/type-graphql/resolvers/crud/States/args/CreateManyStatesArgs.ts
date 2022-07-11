import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatesCreateManyInput } from "../../../inputs/StatesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStatesArgs {
  @TypeGraphQL.Field(_type => [StatesCreateManyInput], {
    nullable: false
  })
  data!: StatesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
