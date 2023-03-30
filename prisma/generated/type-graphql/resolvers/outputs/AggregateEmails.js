"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmails = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsAvgAggregate_1 = require("../outputs/EmailsAvgAggregate");
const EmailsCountAggregate_1 = require("../outputs/EmailsCountAggregate");
const EmailsMaxAggregate_1 = require("../outputs/EmailsMaxAggregate");
const EmailsMinAggregate_1 = require("../outputs/EmailsMinAggregate");
const EmailsSumAggregate_1 = require("../outputs/EmailsSumAggregate");
let AggregateEmails = class AggregateEmails {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCountAggregate_1.EmailsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsCountAggregate_1.EmailsCountAggregate)
], AggregateEmails.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsAvgAggregate_1.EmailsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsAvgAggregate_1.EmailsAvgAggregate)
], AggregateEmails.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsSumAggregate_1.EmailsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsSumAggregate_1.EmailsSumAggregate)
], AggregateEmails.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsMinAggregate_1.EmailsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsMinAggregate_1.EmailsMinAggregate)
], AggregateEmails.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsMaxAggregate_1.EmailsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsMaxAggregate_1.EmailsMaxAggregate)
], AggregateEmails.prototype, "_max", void 0);
AggregateEmails = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateEmails", {
        isAbstract: true
    })
], AggregateEmails);
exports.AggregateEmails = AggregateEmails;
