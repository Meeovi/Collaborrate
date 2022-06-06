"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePdf_templates = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesAvgAggregate_1 = require("../outputs/Pdf_templatesAvgAggregate");
const Pdf_templatesCountAggregate_1 = require("../outputs/Pdf_templatesCountAggregate");
const Pdf_templatesMaxAggregate_1 = require("../outputs/Pdf_templatesMaxAggregate");
const Pdf_templatesMinAggregate_1 = require("../outputs/Pdf_templatesMinAggregate");
const Pdf_templatesSumAggregate_1 = require("../outputs/Pdf_templatesSumAggregate");
let AggregatePdf_templates = class AggregatePdf_templates {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesCountAggregate_1.Pdf_templatesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesCountAggregate_1.Pdf_templatesCountAggregate)
], AggregatePdf_templates.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesAvgAggregate_1.Pdf_templatesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesAvgAggregate_1.Pdf_templatesAvgAggregate)
], AggregatePdf_templates.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesSumAggregate_1.Pdf_templatesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesSumAggregate_1.Pdf_templatesSumAggregate)
], AggregatePdf_templates.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesMinAggregate_1.Pdf_templatesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesMinAggregate_1.Pdf_templatesMinAggregate)
], AggregatePdf_templates.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesMaxAggregate_1.Pdf_templatesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesMaxAggregate_1.Pdf_templatesMaxAggregate)
], AggregatePdf_templates.prototype, "_max", void 0);
AggregatePdf_templates = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePdf_templates", {
        isAbstract: true
    })
], AggregatePdf_templates);
exports.AggregatePdf_templates = AggregatePdf_templates;
