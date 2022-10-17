"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTrainingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsWhereInput_1 = require("../../../inputs/TrainingsWhereInput");
let DeleteManyTrainingsArgs = class DeleteManyTrainingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsWhereInput_1.TrainingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsWhereInput_1.TrainingsWhereInput)
], DeleteManyTrainingsArgs.prototype, "where", void 0);
DeleteManyTrainingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTrainingsArgs);
exports.DeleteManyTrainingsArgs = DeleteManyTrainingsArgs;
