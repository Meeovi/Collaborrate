"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateKnowledgebase = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseAvgAggregate_1 = require("../outputs/KnowledgebaseAvgAggregate");
const KnowledgebaseCountAggregate_1 = require("../outputs/KnowledgebaseCountAggregate");
const KnowledgebaseMaxAggregate_1 = require("../outputs/KnowledgebaseMaxAggregate");
const KnowledgebaseMinAggregate_1 = require("../outputs/KnowledgebaseMinAggregate");
const KnowledgebaseSumAggregate_1 = require("../outputs/KnowledgebaseSumAggregate");
let AggregateKnowledgebase = class AggregateKnowledgebase {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseCountAggregate_1.KnowledgebaseCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseCountAggregate_1.KnowledgebaseCountAggregate)
], AggregateKnowledgebase.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseAvgAggregate_1.KnowledgebaseAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseAvgAggregate_1.KnowledgebaseAvgAggregate)
], AggregateKnowledgebase.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseSumAggregate_1.KnowledgebaseSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseSumAggregate_1.KnowledgebaseSumAggregate)
], AggregateKnowledgebase.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseMinAggregate_1.KnowledgebaseMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseMinAggregate_1.KnowledgebaseMinAggregate)
], AggregateKnowledgebase.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseMaxAggregate_1.KnowledgebaseMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseMaxAggregate_1.KnowledgebaseMaxAggregate)
], AggregateKnowledgebase.prototype, "_max", void 0);
AggregateKnowledgebase = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateKnowledgebase", {
        isAbstract: true
    })
], AggregateKnowledgebase);
exports.AggregateKnowledgebase = AggregateKnowledgebase;
