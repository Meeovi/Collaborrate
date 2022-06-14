import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Content_typeCreateManyInput } from "../../../inputs/Content_typeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyContent_typeArgs {
  @TypeGraphQL.Field(_type => [Content_typeCreateManyInput], {
    nullable: false
  })
  data!: Content_typeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
