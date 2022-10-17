"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTrainingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/TrainingsOrderByWithRelationAndSearchRelevanceInput");
const TrainingsWhereInput_1 = require("../../../inputs/TrainingsWhereInput");
const TrainingsWhereUniqueInput_1 = require("../../../inputs/TrainingsWhereUniqueInput");
let AggregateTrainingsArgs = class AggregateTrainingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsWhereInput_1.TrainingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsWhereInput_1.TrainingsWhereInput)
], AggregateTrainingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TrainingsOrderByWithRelationAndSearchRelevanceInput_1.TrainingsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTrainingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput)
], AggregateTrainingsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTrainingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTrainingsArgs.prototype, "skip", void 0);
AggregateTrainingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTrainingsArgs);
exports.AggregateTrainingsArgs = AggregateTrainingsArgs;
