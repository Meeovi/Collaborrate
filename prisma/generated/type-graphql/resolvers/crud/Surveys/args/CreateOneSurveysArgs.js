"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysCreateInput_1 = require("../../../inputs/SurveysCreateInput");
let CreateOneSurveysArgs = class CreateOneSurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysCreateInput_1.SurveysCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SurveysCreateInput_1.SurveysCreateInput)
], CreateOneSurveysArgs.prototype, "data", void 0);
CreateOneSurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSurveysArgs);
exports.CreateOneSurveysArgs = CreateOneSurveysArgs;
