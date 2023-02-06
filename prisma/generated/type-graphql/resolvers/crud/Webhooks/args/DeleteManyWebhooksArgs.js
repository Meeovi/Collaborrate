"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyWebhooksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebhooksWhereInput_1 = require("../../../inputs/WebhooksWhereInput");
let DeleteManyWebhooksArgs = class DeleteManyWebhooksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksWhereInput_1.WebhooksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksWhereInput_1.WebhooksWhereInput)
], DeleteManyWebhooksArgs.prototype, "where", void 0);
DeleteManyWebhooksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyWebhooksArgs);
exports.DeleteManyWebhooksArgs = DeleteManyWebhooksArgs;
