import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_subscribersUpdateManyMutationInput } from "../../../inputs/Newsletter_subscribersUpdateManyMutationInput";
import { Newsletter_subscribersWhereInput } from "../../../inputs/Newsletter_subscribersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNewsletter_subscribersArgs {
  @TypeGraphQL.Field(_type => Newsletter_subscribersUpdateManyMutationInput, {
    nullable: false
  })
  data!: Newsletter_subscribersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput, {
    nullable: true
  })
  where?: Newsletter_subscribersWhereInput | undefined;
}
