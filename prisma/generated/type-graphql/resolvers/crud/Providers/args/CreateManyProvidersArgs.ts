import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProvidersCreateManyInput } from "../../../inputs/ProvidersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProvidersArgs {
  @TypeGraphQL.Field(_type => [ProvidersCreateManyInput], {
    nullable: false
  })
  data!: ProvidersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
