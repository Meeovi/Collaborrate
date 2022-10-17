"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysUpdateInput_1 = require("../../../inputs/SurveysUpdateInput");
const SurveysWhereUniqueInput_1 = require("../../../inputs/SurveysWhereUniqueInput");
let UpdateOneSurveysArgs = class UpdateOneSurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysUpdateInput_1.SurveysUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SurveysUpdateInput_1.SurveysUpdateInput)
], UpdateOneSurveysArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereUniqueInput_1.SurveysWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SurveysWhereUniqueInput_1.SurveysWhereUniqueInput)
], UpdateOneSurveysArgs.prototype, "where", void 0);
UpdateOneSurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSurveysArgs);
exports.UpdateOneSurveysArgs = UpdateOneSurveysArgs;
