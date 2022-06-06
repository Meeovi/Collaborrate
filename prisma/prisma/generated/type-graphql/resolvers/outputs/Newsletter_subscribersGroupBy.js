"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersAvgAggregate_1 = require("../outputs/Newsletter_subscribersAvgAggregate");
const Newsletter_subscribersCountAggregate_1 = require("../outputs/Newsletter_subscribersCountAggregate");
const Newsletter_subscribersMaxAggregate_1 = require("../outputs/Newsletter_subscribersMaxAggregate");
const Newsletter_subscribersMinAggregate_1 = require("../outputs/Newsletter_subscribersMinAggregate");
const Newsletter_subscribersSumAggregate_1 = require("../outputs/Newsletter_subscribersSumAggregate");
let Newsletter_subscribersGroupBy = class Newsletter_subscribersGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Newsletter_subscribersGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersGroupBy.prototype, "customer_first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersGroupBy.prototype, "customer_last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersGroupBy.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersGroupBy.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Newsletter_subscribersGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Newsletter_subscribersGroupBy.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCountAggregate_1.Newsletter_subscribersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCountAggregate_1.Newsletter_subscribersCountAggregate)
], Newsletter_subscribersGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersAvgAggregate_1.Newsletter_subscribersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersAvgAggregate_1.Newsletter_subscribersAvgAggregate)
], Newsletter_subscribersGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersSumAggregate_1.Newsletter_subscribersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersSumAggregate_1.Newsletter_subscribersSumAggregate)
], Newsletter_subscribersGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersMinAggregate_1.Newsletter_subscribersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersMinAggregate_1.Newsletter_subscribersMinAggregate)
], Newsletter_subscribersGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersMaxAggregate_1.Newsletter_subscribersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersMaxAggregate_1.Newsletter_subscribersMaxAggregate)
], Newsletter_subscribersGroupBy.prototype, "_max", void 0);
Newsletter_subscribersGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Newsletter_subscribersGroupBy", {
        isAbstract: true
    })
], Newsletter_subscribersGroupBy);
exports.Newsletter_subscribersGroupBy = Newsletter_subscribersGroupBy;
