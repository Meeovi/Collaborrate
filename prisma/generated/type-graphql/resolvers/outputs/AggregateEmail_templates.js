"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmail_templates = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesAvgAggregate_1 = require("../outputs/Email_templatesAvgAggregate");
const Email_templatesCountAggregate_1 = require("../outputs/Email_templatesCountAggregate");
const Email_templatesMaxAggregate_1 = require("../outputs/Email_templatesMaxAggregate");
const Email_templatesMinAggregate_1 = require("../outputs/Email_templatesMinAggregate");
const Email_templatesSumAggregate_1 = require("../outputs/Email_templatesSumAggregate");
let AggregateEmail_templates = class AggregateEmail_templates {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesCountAggregate_1.Email_templatesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesCountAggregate_1.Email_templatesCountAggregate)
], AggregateEmail_templates.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesAvgAggregate_1.Email_templatesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesAvgAggregate_1.Email_templatesAvgAggregate)
], AggregateEmail_templates.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesSumAggregate_1.Email_templatesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesSumAggregate_1.Email_templatesSumAggregate)
], AggregateEmail_templates.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesMinAggregate_1.Email_templatesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesMinAggregate_1.Email_templatesMinAggregate)
], AggregateEmail_templates.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesMaxAggregate_1.Email_templatesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesMaxAggregate_1.Email_templatesMaxAggregate)
], AggregateEmail_templates.prototype, "_max", void 0);
AggregateEmail_templates = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateEmail_templates", {
        isAbstract: true
    })
], AggregateEmail_templates);
exports.AggregateEmail_templates = AggregateEmail_templates;
