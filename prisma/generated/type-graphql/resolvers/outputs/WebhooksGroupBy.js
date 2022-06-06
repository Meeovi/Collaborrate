"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const WebhooksAvgAggregate_1 = require("../outputs/WebhooksAvgAggregate");
const WebhooksCountAggregate_1 = require("../outputs/WebhooksCountAggregate");
const WebhooksMaxAggregate_1 = require("../outputs/WebhooksMaxAggregate");
const WebhooksMinAggregate_1 = require("../outputs/WebhooksMinAggregate");
const WebhooksSumAggregate_1 = require("../outputs/WebhooksSumAggregate");
let WebhooksGroupBy = class WebhooksGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WebhooksGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WebhooksGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksGroupBy.prototype, "headers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksGroupBy.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksGroupBy.prototype, "retrieve", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksGroupBy.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksGroupBy.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksGroupBy.prototype, "publish", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksGroupBy.prototype, "unpublish", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksCountAggregate_1.WebhooksCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksCountAggregate_1.WebhooksCountAggregate)
], WebhooksGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksAvgAggregate_1.WebhooksAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksAvgAggregate_1.WebhooksAvgAggregate)
], WebhooksGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksSumAggregate_1.WebhooksSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksSumAggregate_1.WebhooksSumAggregate)
], WebhooksGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksMinAggregate_1.WebhooksMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksMinAggregate_1.WebhooksMinAggregate)
], WebhooksGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksMaxAggregate_1.WebhooksMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksMaxAggregate_1.WebhooksMaxAggregate)
], WebhooksGroupBy.prototype, "_max", void 0);
WebhooksGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WebhooksGroupBy", {
        isAbstract: true
    })
], WebhooksGroupBy);
exports.WebhooksGroupBy = WebhooksGroupBy;
