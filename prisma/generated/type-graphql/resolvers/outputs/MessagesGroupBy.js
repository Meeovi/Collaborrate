"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesAvgAggregate_1 = require("../outputs/MessagesAvgAggregate");
const MessagesCountAggregate_1 = require("../outputs/MessagesCountAggregate");
const MessagesMaxAggregate_1 = require("../outputs/MessagesMaxAggregate");
const MessagesMinAggregate_1 = require("../outputs/MessagesMinAggregate");
const MessagesSumAggregate_1 = require("../outputs/MessagesSumAggregate");
let MessagesGroupBy = class MessagesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MessagesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesGroupBy.prototype, "from", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MessagesGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesGroupBy.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesGroupBy.prototype, "sender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MessagesGroupBy.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MessagesGroupBy.prototype, "staff_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesCountAggregate_1.MessagesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesCountAggregate_1.MessagesCountAggregate)
], MessagesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesAvgAggregate_1.MessagesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesAvgAggregate_1.MessagesAvgAggregate)
], MessagesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesSumAggregate_1.MessagesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesSumAggregate_1.MessagesSumAggregate)
], MessagesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesMinAggregate_1.MessagesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesMinAggregate_1.MessagesMinAggregate)
], MessagesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesMaxAggregate_1.MessagesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesMaxAggregate_1.MessagesMaxAggregate)
], MessagesGroupBy.prototype, "_max", void 0);
MessagesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MessagesGroupBy", {
        isAbstract: true
    })
], MessagesGroupBy);
exports.MessagesGroupBy = MessagesGroupBy;
