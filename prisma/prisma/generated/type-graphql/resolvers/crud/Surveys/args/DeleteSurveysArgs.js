"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysWhereUniqueInput_1 = require("../../../inputs/SurveysWhereUniqueInput");
let DeleteSurveysArgs = class DeleteSurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereUniqueInput_1.SurveysWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SurveysWhereUniqueInput_1.SurveysWhereUniqueInput)
], DeleteSurveysArgs.prototype, "where", void 0);
DeleteSurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteSurveysArgs);
exports.DeleteSurveysArgs = DeleteSurveysArgs;
