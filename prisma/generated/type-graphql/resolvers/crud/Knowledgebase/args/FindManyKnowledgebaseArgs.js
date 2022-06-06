"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyKnowledgebaseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseOrderByWithRelationInput_1 = require("../../../inputs/KnowledgebaseOrderByWithRelationInput");
const KnowledgebaseWhereInput_1 = require("../../../inputs/KnowledgebaseWhereInput");
const KnowledgebaseWhereUniqueInput_1 = require("../../../inputs/KnowledgebaseWhereUniqueInput");
const KnowledgebaseScalarFieldEnum_1 = require("../../../../enums/KnowledgebaseScalarFieldEnum");
let FindManyKnowledgebaseArgs = class FindManyKnowledgebaseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseWhereInput_1.KnowledgebaseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseWhereInput_1.KnowledgebaseWhereInput)
], FindManyKnowledgebaseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [KnowledgebaseOrderByWithRelationInput_1.KnowledgebaseOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyKnowledgebaseArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput)
], FindManyKnowledgebaseArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyKnowledgebaseArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyKnowledgebaseArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [KnowledgebaseScalarFieldEnum_1.KnowledgebaseScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyKnowledgebaseArgs.prototype, "distinct", void 0);
FindManyKnowledgebaseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyKnowledgebaseArgs);
exports.FindManyKnowledgebaseArgs = FindManyKnowledgebaseArgs;
