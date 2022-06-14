import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CouponsCreateManyInput } from "../../../inputs/CouponsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCouponsArgs {
  @TypeGraphQL.Field(_type => [CouponsCreateManyInput], {
    nullable: false
  })
  data!: CouponsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
