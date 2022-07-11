import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EndofshiftCreateManyInput } from "../../../inputs/EndofshiftCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEndofshiftArgs {
  @TypeGraphQL.Field(_type => [EndofshiftCreateManyInput], {
    nullable: false
  })
  data!: EndofshiftCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
