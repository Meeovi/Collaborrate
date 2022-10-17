"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTrainingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsWhereUniqueInput_1 = require("../../../inputs/TrainingsWhereUniqueInput");
let DeleteOneTrainingsArgs = class DeleteOneTrainingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput)
], DeleteOneTrainingsArgs.prototype, "where", void 0);
DeleteOneTrainingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTrainingsArgs);
exports.DeleteOneTrainingsArgs = DeleteOneTrainingsArgs;
