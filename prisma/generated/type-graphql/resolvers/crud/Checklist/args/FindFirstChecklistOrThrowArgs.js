"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstChecklistOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/ChecklistOrderByWithRelationAndSearchRelevanceInput");
const ChecklistWhereInput_1 = require("../../../inputs/ChecklistWhereInput");
const ChecklistWhereUniqueInput_1 = require("../../../inputs/ChecklistWhereUniqueInput");
const ChecklistScalarFieldEnum_1 = require("../../../../enums/ChecklistScalarFieldEnum");
let FindFirstChecklistOrThrowArgs = class FindFirstChecklistOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistWhereInput_1.ChecklistWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistWhereInput_1.ChecklistWhereInput)
], FindFirstChecklistOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChecklistOrderByWithRelationAndSearchRelevanceInput_1.ChecklistOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstChecklistOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistWhereUniqueInput_1.ChecklistWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistWhereUniqueInput_1.ChecklistWhereUniqueInput)
], FindFirstChecklistOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstChecklistOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstChecklistOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChecklistScalarFieldEnum_1.ChecklistScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstChecklistOrThrowArgs.prototype, "distinct", void 0);
FindFirstChecklistOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstChecklistOrThrowArgs);
exports.FindFirstChecklistOrThrowArgs = FindFirstChecklistOrThrowArgs;
