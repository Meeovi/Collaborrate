"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgebaseGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const KnowledgebaseAvgAggregate_1 = require("../outputs/KnowledgebaseAvgAggregate");
const KnowledgebaseCountAggregate_1 = require("../outputs/KnowledgebaseCountAggregate");
const KnowledgebaseMaxAggregate_1 = require("../outputs/KnowledgebaseMaxAggregate");
const KnowledgebaseMinAggregate_1 = require("../outputs/KnowledgebaseMinAggregate");
const KnowledgebaseSumAggregate_1 = require("../outputs/KnowledgebaseSumAggregate");
let KnowledgebaseGroupBy = class KnowledgebaseGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], KnowledgebaseGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], KnowledgebaseGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseGroupBy.prototype, "revision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseGroupBy.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseGroupBy.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseGroupBy.prototype, "approver", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], KnowledgebaseGroupBy.prototype, "date_modified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseCountAggregate_1.KnowledgebaseCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseCountAggregate_1.KnowledgebaseCountAggregate)
], KnowledgebaseGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseAvgAggregate_1.KnowledgebaseAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseAvgAggregate_1.KnowledgebaseAvgAggregate)
], KnowledgebaseGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseSumAggregate_1.KnowledgebaseSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseSumAggregate_1.KnowledgebaseSumAggregate)
], KnowledgebaseGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseMinAggregate_1.KnowledgebaseMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseMinAggregate_1.KnowledgebaseMinAggregate)
], KnowledgebaseGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseMaxAggregate_1.KnowledgebaseMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseMaxAggregate_1.KnowledgebaseMaxAggregate)
], KnowledgebaseGroupBy.prototype, "_max", void 0);
KnowledgebaseGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("KnowledgebaseGroupBy", {
        isAbstract: true
    })
], KnowledgebaseGroupBy);
exports.KnowledgebaseGroupBy = KnowledgebaseGroupBy;
