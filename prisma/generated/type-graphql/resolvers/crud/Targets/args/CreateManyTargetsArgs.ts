import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TargetsCreateManyInput } from "../../../inputs/TargetsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTargetsArgs {
  @TypeGraphQL.Field(_type => [TargetsCreateManyInput], {
    nullable: false
  })
  data!: TargetsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
