"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertWebhooksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebhooksCreateInput_1 = require("../../../inputs/WebhooksCreateInput");
const WebhooksUpdateInput_1 = require("../../../inputs/WebhooksUpdateInput");
const WebhooksWhereUniqueInput_1 = require("../../../inputs/WebhooksWhereUniqueInput");
let UpsertWebhooksArgs = class UpsertWebhooksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksWhereUniqueInput_1.WebhooksWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebhooksWhereUniqueInput_1.WebhooksWhereUniqueInput)
], UpsertWebhooksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksCreateInput_1.WebhooksCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebhooksCreateInput_1.WebhooksCreateInput)
], UpsertWebhooksArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksUpdateInput_1.WebhooksUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebhooksUpdateInput_1.WebhooksUpdateInput)
], UpsertWebhooksArgs.prototype, "update", void 0);
UpsertWebhooksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertWebhooksArgs);
exports.UpsertWebhooksArgs = UpsertWebhooksArgs;
