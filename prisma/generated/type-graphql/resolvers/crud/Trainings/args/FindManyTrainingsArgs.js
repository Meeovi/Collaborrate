"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTrainingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/TrainingsOrderByWithRelationAndSearchRelevanceInput");
const TrainingsWhereInput_1 = require("../../../inputs/TrainingsWhereInput");
const TrainingsWhereUniqueInput_1 = require("../../../inputs/TrainingsWhereUniqueInput");
const TrainingsScalarFieldEnum_1 = require("../../../../enums/TrainingsScalarFieldEnum");
let FindManyTrainingsArgs = class FindManyTrainingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsWhereInput_1.TrainingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsWhereInput_1.TrainingsWhereInput)
], FindManyTrainingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TrainingsOrderByWithRelationAndSearchRelevanceInput_1.TrainingsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTrainingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput)
], FindManyTrainingsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTrainingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTrainingsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TrainingsScalarFieldEnum_1.TrainingsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTrainingsArgs.prototype, "distinct", void 0);
FindManyTrainingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTrainingsArgs);
exports.FindManyTrainingsArgs = FindManyTrainingsArgs;
