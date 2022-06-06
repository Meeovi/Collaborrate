"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyNewsletter_subscribersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersUpdateManyMutationInput_1 = require("../../../inputs/Newsletter_subscribersUpdateManyMutationInput");
const Newsletter_subscribersWhereInput_1 = require("../../../inputs/Newsletter_subscribersWhereInput");
let UpdateManyNewsletter_subscribersArgs = class UpdateManyNewsletter_subscribersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersUpdateManyMutationInput_1.Newsletter_subscribersUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersUpdateManyMutationInput_1.Newsletter_subscribersUpdateManyMutationInput)
], UpdateManyNewsletter_subscribersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput)
], UpdateManyNewsletter_subscribersArgs.prototype, "where", void 0);
UpdateManyNewsletter_subscribersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyNewsletter_subscribersArgs);
exports.UpdateManyNewsletter_subscribersArgs = UpdateManyNewsletter_subscribersArgs;
