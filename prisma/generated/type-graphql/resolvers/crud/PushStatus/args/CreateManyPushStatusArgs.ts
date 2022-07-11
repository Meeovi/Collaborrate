import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PushStatusCreateManyInput } from "../../../inputs/PushStatusCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPushStatusArgs {
  @TypeGraphQL.Field(_type => [PushStatusCreateManyInput], {
    nullable: false
  })
  data!: PushStatusCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
