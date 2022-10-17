"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTrainingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsUpdateInput_1 = require("../../../inputs/TrainingsUpdateInput");
const TrainingsWhereUniqueInput_1 = require("../../../inputs/TrainingsWhereUniqueInput");
let UpdateOneTrainingsArgs = class UpdateOneTrainingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsUpdateInput_1.TrainingsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TrainingsUpdateInput_1.TrainingsUpdateInput)
], UpdateOneTrainingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TrainingsWhereUniqueInput_1.TrainingsWhereUniqueInput)
], UpdateOneTrainingsArgs.prototype, "where", void 0);
UpdateOneTrainingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTrainingsArgs);
exports.UpdateOneTrainingsArgs = UpdateOneTrainingsArgs;
