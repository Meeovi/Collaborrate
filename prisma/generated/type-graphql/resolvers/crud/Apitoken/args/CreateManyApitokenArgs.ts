import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApitokenCreateManyInput } from "../../../inputs/ApitokenCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApitokenArgs {
  @TypeGraphQL.Field(_type => [ApitokenCreateManyInput], {
    nullable: false
  })
  data!: ApitokenCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
