import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Credit_memosCreateManyInput } from "../../../inputs/Credit_memosCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCredit_memosArgs {
  @TypeGraphQL.Field(_type => [Credit_memosCreateManyInput], {
    nullable: false
  })
  data!: Credit_memosCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
