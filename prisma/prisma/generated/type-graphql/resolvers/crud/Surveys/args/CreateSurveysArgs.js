"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysCreateInput_1 = require("../../../inputs/SurveysCreateInput");
let CreateSurveysArgs = class CreateSurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysCreateInput_1.SurveysCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SurveysCreateInput_1.SurveysCreateInput)
], CreateSurveysArgs.prototype, "data", void 0);
CreateSurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateSurveysArgs);
exports.CreateSurveysArgs = CreateSurveysArgs;
