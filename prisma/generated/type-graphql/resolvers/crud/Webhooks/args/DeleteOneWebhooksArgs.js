"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneWebhooksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebhooksWhereUniqueInput_1 = require("../../../inputs/WebhooksWhereUniqueInput");
let DeleteOneWebhooksArgs = class DeleteOneWebhooksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksWhereUniqueInput_1.WebhooksWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebhooksWhereUniqueInput_1.WebhooksWhereUniqueInput)
], DeleteOneWebhooksArgs.prototype, "where", void 0);
DeleteOneWebhooksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneWebhooksArgs);
exports.DeleteOneWebhooksArgs = DeleteOneWebhooksArgs;
