"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsAvgAggregate_1 = require("../outputs/EmailsAvgAggregate");
const EmailsCountAggregate_1 = require("../outputs/EmailsCountAggregate");
const EmailsMaxAggregate_1 = require("../outputs/EmailsMaxAggregate");
const EmailsMinAggregate_1 = require("../outputs/EmailsMinAggregate");
const EmailsSumAggregate_1 = require("../outputs/EmailsSumAggregate");
let EmailsGroupBy = class EmailsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EmailsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmailsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsGroupBy.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EmailsGroupBy.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsGroupBy.prototype, "bcc", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsGroupBy.prototype, "cc", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsGroupBy.prototype, "from", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmailsGroupBy.prototype, "staff_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCountAggregate_1.EmailsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsCountAggregate_1.EmailsCountAggregate)
], EmailsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsAvgAggregate_1.EmailsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsAvgAggregate_1.EmailsAvgAggregate)
], EmailsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsSumAggregate_1.EmailsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsSumAggregate_1.EmailsSumAggregate)
], EmailsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsMinAggregate_1.EmailsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsMinAggregate_1.EmailsMinAggregate)
], EmailsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsMaxAggregate_1.EmailsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsMaxAggregate_1.EmailsMaxAggregate)
], EmailsGroupBy.prototype, "_max", void 0);
EmailsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EmailsGroupBy", {
        isAbstract: true
    })
], EmailsGroupBy);
exports.EmailsGroupBy = EmailsGroupBy;
