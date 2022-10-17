"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTrainingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsCreateInput_1 = require("../../../inputs/TrainingsCreateInput");
let CreateOneTrainingsArgs = class CreateOneTrainingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsCreateInput_1.TrainingsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TrainingsCreateInput_1.TrainingsCreateInput)
], CreateOneTrainingsArgs.prototype, "data", void 0);
CreateOneTrainingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTrainingsArgs);
exports.CreateOneTrainingsArgs = CreateOneTrainingsArgs;
