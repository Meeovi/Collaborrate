"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChecklistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/ChecklistOrderByWithRelationAndSearchRelevanceInput");
const ChecklistWhereInput_1 = require("../../../inputs/ChecklistWhereInput");
const ChecklistWhereUniqueInput_1 = require("../../../inputs/ChecklistWhereUniqueInput");
let AggregateChecklistArgs = class AggregateChecklistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistWhereInput_1.ChecklistWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistWhereInput_1.ChecklistWhereInput)
], AggregateChecklistArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChecklistOrderByWithRelationAndSearchRelevanceInput_1.ChecklistOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateChecklistArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistWhereUniqueInput_1.ChecklistWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistWhereUniqueInput_1.ChecklistWhereUniqueInput)
], AggregateChecklistArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateChecklistArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateChecklistArgs.prototype, "skip", void 0);
AggregateChecklistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateChecklistArgs);
exports.AggregateChecklistArgs = AggregateChecklistArgs;
