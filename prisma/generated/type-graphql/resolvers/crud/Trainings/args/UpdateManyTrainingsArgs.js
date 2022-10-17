"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTrainingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsUpdateManyMutationInput_1 = require("../../../inputs/TrainingsUpdateManyMutationInput");
const TrainingsWhereInput_1 = require("../../../inputs/TrainingsWhereInput");
let UpdateManyTrainingsArgs = class UpdateManyTrainingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsUpdateManyMutationInput_1.TrainingsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TrainingsUpdateManyMutationInput_1.TrainingsUpdateManyMutationInput)
], UpdateManyTrainingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsWhereInput_1.TrainingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsWhereInput_1.TrainingsWhereInput)
], UpdateManyTrainingsArgs.prototype, "where", void 0);
UpdateManyTrainingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTrainingsArgs);
exports.UpdateManyTrainingsArgs = UpdateManyTrainingsArgs;
