import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationsCreateManyInput } from "../../../inputs/IntegrationsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIntegrationsArgs {
  @TypeGraphQL.Field(_type => [IntegrationsCreateManyInput], {
    nullable: false
  })
  data!: IntegrationsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
