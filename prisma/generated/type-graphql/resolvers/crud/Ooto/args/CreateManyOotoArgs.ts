import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OotoCreateManyInput } from "../../../inputs/OotoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOotoArgs {
  @TypeGraphQL.Field(_type => [OotoCreateManyInput], {
    nullable: false
  })
  data!: OotoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
