"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWebhooksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebhooksWhereUniqueInput_1 = require("../../../inputs/WebhooksWhereUniqueInput");
let FindUniqueWebhooksArgs = class FindUniqueWebhooksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksWhereUniqueInput_1.WebhooksWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebhooksWhereUniqueInput_1.WebhooksWhereUniqueInput)
], FindUniqueWebhooksArgs.prototype, "where", void 0);
FindUniqueWebhooksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueWebhooksArgs);
exports.FindUniqueWebhooksArgs = FindUniqueWebhooksArgs;
