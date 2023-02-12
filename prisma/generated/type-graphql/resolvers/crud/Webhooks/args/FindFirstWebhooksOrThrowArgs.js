"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstWebhooksOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebhooksOrderByWithRelationInput_1 = require("../../../inputs/WebhooksOrderByWithRelationInput");
const WebhooksWhereInput_1 = require("../../../inputs/WebhooksWhereInput");
const WebhooksWhereUniqueInput_1 = require("../../../inputs/WebhooksWhereUniqueInput");
const WebhooksScalarFieldEnum_1 = require("../../../../enums/WebhooksScalarFieldEnum");
let FindFirstWebhooksOrThrowArgs = class FindFirstWebhooksOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksWhereInput_1.WebhooksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksWhereInput_1.WebhooksWhereInput)
], FindFirstWebhooksOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebhooksOrderByWithRelationInput_1.WebhooksOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWebhooksOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksWhereUniqueInput_1.WebhooksWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksWhereUniqueInput_1.WebhooksWhereUniqueInput)
], FindFirstWebhooksOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWebhooksOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWebhooksOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebhooksScalarFieldEnum_1.WebhooksScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWebhooksOrThrowArgs.prototype, "distinct", void 0);
FindFirstWebhooksOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstWebhooksOrThrowArgs);
exports.FindFirstWebhooksOrThrowArgs = FindFirstWebhooksOrThrowArgs;
