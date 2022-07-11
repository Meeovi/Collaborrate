import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZonesCreateManyInput } from "../../../inputs/ZonesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyZonesArgs {
  @TypeGraphQL.Field(_type => [ZonesCreateManyInput], {
    nullable: false
  })
  data!: ZonesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
