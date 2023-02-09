"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneWebhooksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebhooksUpdateInput_1 = require("../../../inputs/WebhooksUpdateInput");
const WebhooksWhereUniqueInput_1 = require("../../../inputs/WebhooksWhereUniqueInput");
let UpdateOneWebhooksArgs = class UpdateOneWebhooksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksUpdateInput_1.WebhooksUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebhooksUpdateInput_1.WebhooksUpdateInput)
], UpdateOneWebhooksArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksWhereUniqueInput_1.WebhooksWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebhooksWhereUniqueInput_1.WebhooksWhereUniqueInput)
], UpdateOneWebhooksArgs.prototype, "where", void 0);
UpdateOneWebhooksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneWebhooksArgs);
exports.UpdateOneWebhooksArgs = UpdateOneWebhooksArgs;
