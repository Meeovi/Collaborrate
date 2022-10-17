"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTrainingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsWhereUniqueInput_1 = require("../../../inputs/TrainingsWhereUniqueInput");
let FindUniqueTrainingsArgs = class FindUniqueTrainingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput)
], FindUniqueTrainingsArgs.prototype, "where", void 0);
FindUniqueTrainingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTrainingsArgs);
exports.FindUniqueTrainingsArgs = FindUniqueTrainingsArgs;
