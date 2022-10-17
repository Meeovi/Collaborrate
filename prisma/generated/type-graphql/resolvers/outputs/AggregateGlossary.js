"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateGlossary = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryAvgAggregate_1 = require("../outputs/GlossaryAvgAggregate");
const GlossaryCountAggregate_1 = require("../outputs/GlossaryCountAggregate");
const GlossaryMaxAggregate_1 = require("../outputs/GlossaryMaxAggregate");
const GlossaryMinAggregate_1 = require("../outputs/GlossaryMinAggregate");
const GlossarySumAggregate_1 = require("../outputs/GlossarySumAggregate");
let AggregateGlossary = class AggregateGlossary {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryCountAggregate_1.GlossaryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryCountAggregate_1.GlossaryCountAggregate)
], AggregateGlossary.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryAvgAggregate_1.GlossaryAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryAvgAggregate_1.GlossaryAvgAggregate)
], AggregateGlossary.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossarySumAggregate_1.GlossarySumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossarySumAggregate_1.GlossarySumAggregate)
], AggregateGlossary.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryMinAggregate_1.GlossaryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryMinAggregate_1.GlossaryMinAggregate)
], AggregateGlossary.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryMaxAggregate_1.GlossaryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryMaxAggregate_1.GlossaryMaxAggregate)
], AggregateGlossary.prototype, "_max", void 0);
AggregateGlossary = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateGlossary", {
        isAbstract: true
    })
], AggregateGlossary);
exports.AggregateGlossary = AggregateGlossary;
