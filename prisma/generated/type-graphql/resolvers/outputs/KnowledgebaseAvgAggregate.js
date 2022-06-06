"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgebaseAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let KnowledgebaseAvgAggregate = class KnowledgebaseAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], KnowledgebaseAvgAggregate.prototype, "id", void 0);
KnowledgebaseAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("KnowledgebaseAvgAggregate", {
        isAbstract: true
    })
], KnowledgebaseAvgAggregate);
exports.KnowledgebaseAvgAggregate = KnowledgebaseAvgAggregate;
