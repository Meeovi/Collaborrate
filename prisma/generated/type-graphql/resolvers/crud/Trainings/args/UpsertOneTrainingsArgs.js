"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTrainingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsCreateInput_1 = require("../../../inputs/TrainingsCreateInput");
const TrainingsUpdateInput_1 = require("../../../inputs/TrainingsUpdateInput");
const TrainingsWhereUniqueInput_1 = require("../../../inputs/TrainingsWhereUniqueInput");
let UpsertOneTrainingsArgs = class UpsertOneTrainingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput)
], UpsertOneTrainingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsCreateInput_1.TrainingsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TrainingsCreateInput_1.TrainingsCreateInput)
], UpsertOneTrainingsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsUpdateInput_1.TrainingsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TrainingsUpdateInput_1.TrainingsUpdateInput)
], UpsertOneTrainingsArgs.prototype, "update", void 0);
UpsertOneTrainingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTrainingsArgs);
exports.UpsertOneTrainingsArgs = UpsertOneTrainingsArgs;
