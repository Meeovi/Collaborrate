"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewslettersGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersAvgAggregate_1 = require("../outputs/NewslettersAvgAggregate");
const NewslettersCountAggregate_1 = require("../outputs/NewslettersCountAggregate");
const NewslettersMaxAggregate_1 = require("../outputs/NewslettersMaxAggregate");
const NewslettersMinAggregate_1 = require("../outputs/NewslettersMinAggregate");
const NewslettersSumAggregate_1 = require("../outputs/NewslettersSumAggregate");
let NewslettersGroupBy = class NewslettersGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], NewslettersGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersGroupBy.prototype, "customer_first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersGroupBy.prototype, "customer_last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersGroupBy.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersGroupBy.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NewslettersGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], NewslettersGroupBy.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersCountAggregate_1.NewslettersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersCountAggregate_1.NewslettersCountAggregate)
], NewslettersGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersAvgAggregate_1.NewslettersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersAvgAggregate_1.NewslettersAvgAggregate)
], NewslettersGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersSumAggregate_1.NewslettersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersSumAggregate_1.NewslettersSumAggregate)
], NewslettersGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersMinAggregate_1.NewslettersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersMinAggregate_1.NewslettersMinAggregate)
], NewslettersGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersMaxAggregate_1.NewslettersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersMaxAggregate_1.NewslettersMaxAggregate)
], NewslettersGroupBy.prototype, "_max", void 0);
NewslettersGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("NewslettersGroupBy", {
        isAbstract: true
    })
], NewslettersGroupBy);
exports.NewslettersGroupBy = NewslettersGroupBy;
