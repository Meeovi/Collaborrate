import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SCHEMACreateManyInput } from "../../../inputs/SCHEMACreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySCHEMAArgs {
  @TypeGraphQL.Field(_type => [SCHEMACreateManyInput], {
    nullable: false
  })
  data!: SCHEMACreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
