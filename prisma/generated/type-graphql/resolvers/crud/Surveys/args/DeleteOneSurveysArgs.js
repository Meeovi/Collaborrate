"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysWhereUniqueInput_1 = require("../../../inputs/SurveysWhereUniqueInput");
let DeleteOneSurveysArgs = class DeleteOneSurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereUniqueInput_1.SurveysWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SurveysWhereUniqueInput_1.SurveysWhereUniqueInput)
], DeleteOneSurveysArgs.prototype, "where", void 0);
DeleteOneSurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneSurveysArgs);
exports.DeleteOneSurveysArgs = DeleteOneSurveysArgs;
