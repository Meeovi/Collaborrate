"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTargetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/TargetsOrderByWithRelationAndSearchRelevanceInput");
const TargetsWhereInput_1 = require("../../../inputs/TargetsWhereInput");
const TargetsWhereUniqueInput_1 = require("../../../inputs/TargetsWhereUniqueInput");
const TargetsScalarFieldEnum_1 = require("../../../../enums/TargetsScalarFieldEnum");
let FindFirstTargetsArgs = class FindFirstTargetsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsWhereInput_1.TargetsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsWhereInput_1.TargetsWhereInput)
], FindFirstTargetsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetsOrderByWithRelationAndSearchRelevanceInput_1.TargetsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTargetsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsWhereUniqueInput_1.TargetsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsWhereUniqueInput_1.TargetsWhereUniqueInput)
], FindFirstTargetsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTargetsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTargetsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetsScalarFieldEnum_1.TargetsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTargetsArgs.prototype, "distinct", void 0);
FindFirstTargetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTargetsArgs);
exports.FindFirstTargetsArgs = FindFirstTargetsArgs;
