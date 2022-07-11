import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReturnsCreateManyInput } from "../../../inputs/ReturnsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReturnsArgs {
  @TypeGraphQL.Field(_type => [ReturnsCreateManyInput], {
    nullable: false
  })
  data!: ReturnsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
