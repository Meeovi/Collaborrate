"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTrainingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/TrainingsOrderByWithRelationAndSearchRelevanceInput");
const TrainingsWhereInput_1 = require("../../../inputs/TrainingsWhereInput");
const TrainingsWhereUniqueInput_1 = require("../../../inputs/TrainingsWhereUniqueInput");
const TrainingsScalarFieldEnum_1 = require("../../../../enums/TrainingsScalarFieldEnum");
let FindFirstTrainingsArgs = class FindFirstTrainingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsWhereInput_1.TrainingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsWhereInput_1.TrainingsWhereInput)
], FindFirstTrainingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TrainingsOrderByWithRelationAndSearchRelevanceInput_1.TrainingsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTrainingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput)
], FindFirstTrainingsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTrainingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTrainingsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TrainingsScalarFieldEnum_1.TrainingsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTrainingsArgs.prototype, "distinct", void 0);
FindFirstTrainingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTrainingsArgs);
exports.FindFirstTrainingsArgs = FindFirstTrainingsArgs;
