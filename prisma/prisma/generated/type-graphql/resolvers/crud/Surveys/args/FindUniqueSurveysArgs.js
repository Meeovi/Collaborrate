"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysWhereUniqueInput_1 = require("../../../inputs/SurveysWhereUniqueInput");
let FindUniqueSurveysArgs = class FindUniqueSurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereUniqueInput_1.SurveysWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SurveysWhereUniqueInput_1.SurveysWhereUniqueInput)
], FindUniqueSurveysArgs.prototype, "where", void 0);
FindUniqueSurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSurveysArgs);
exports.FindUniqueSurveysArgs = FindUniqueSurveysArgs;
