import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PartnersCreateManyInput } from "../../../inputs/PartnersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPartnersArgs {
  @TypeGraphQL.Field(_type => [PartnersCreateManyInput], {
    nullable: false
  })
  data!: PartnersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
