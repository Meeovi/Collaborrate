import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CitiesCreateManyInput } from "../../../inputs/CitiesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCitiesArgs {
  @TypeGraphQL.Field(_type => [CitiesCreateManyInput], {
    nullable: false
  })
  data!: CitiesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
