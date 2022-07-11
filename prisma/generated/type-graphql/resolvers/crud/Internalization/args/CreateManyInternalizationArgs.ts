import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InternalizationCreateManyInput } from "../../../inputs/InternalizationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyInternalizationArgs {
  @TypeGraphQL.Field(_type => [InternalizationCreateManyInput], {
    nullable: false
  })
  data!: InternalizationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
