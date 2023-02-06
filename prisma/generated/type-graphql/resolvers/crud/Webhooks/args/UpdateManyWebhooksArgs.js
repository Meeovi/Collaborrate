"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWebhooksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebhooksUpdateManyMutationInput_1 = require("../../../inputs/WebhooksUpdateManyMutationInput");
const WebhooksWhereInput_1 = require("../../../inputs/WebhooksWhereInput");
let UpdateManyWebhooksArgs = class UpdateManyWebhooksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksUpdateManyMutationInput_1.WebhooksUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebhooksUpdateManyMutationInput_1.WebhooksUpdateManyMutationInput)
], UpdateManyWebhooksArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksWhereInput_1.WebhooksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksWhereInput_1.WebhooksWhereInput)
], UpdateManyWebhooksArgs.prototype, "where", void 0);
UpdateManyWebhooksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyWebhooksArgs);
exports.UpdateManyWebhooksArgs = UpdateManyWebhooksArgs;
